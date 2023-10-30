import { Either, fromPromise, ap, right, getOrElse, flatten, left } from './fp/either';
import { pipe } from './fp/utils';
import { fetchClient, fetchExecutor } from './fetching';
import { ClientUser, ExecutorUser } from './types';
import { fromNullable, isSome } from './fp/maybe';
import { distance } from './utils';
import { fromCompare, ordNumber } from './fp/ord';
import { sort } from './fp/array';

type Response<R> = Promise<Either<string, R>>;

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> =>
  fromPromise(
    fetchClient().then(clientsArray =>
      clientsArray.map(client => ({ ...client, demands: fromNullable(client.demands) })),
    ),
  );

export enum SortBy {
  distance = 'distance',
  reward = 'reward',
}

export const show =
  (sortBy: SortBy) =>
  (clients: Array<ClientUser>) =>
  (executor: ExecutorUser): Either<string, string> => {
    const reachableClients = clients.filter(client => {
      return isSome(client.demands)
        ? client.demands.value.some(demand => executor.possibilities.includes(demand))
        : client;
    });

    const callableClientsSort =
      sortBy === SortBy.distance
        ? fromCompare((a: ClientUser, b: ClientUser) => {
            return ordNumber.compare(
              distance(a.position, executor.position),
              distance(b.position, executor.position),
            );
          })
        : fromCompare((a: ClientUser, b: ClientUser) => ordNumber.compare(b.reward, a.reward));

    const getReachableClientsTable = (reachableClients: Array<ClientUser>) => {
      return reachableClients.reduce((accumulator: string, reachableClient: ClientUser) => {
        return (
          accumulator +
          `\nname: ${reachableClient.name}, distance: ${distance(
            executor.position,
            reachableClient.position,
          )}, reward: ${reachableClient.reward}`
        );
      }, '');
    };

    return !reachableClients.length
      ? left('This executor cannot meet the demands of any client!')
      : reachableClients.length === clients.length
      ? right('This executor meets all demands of all clients!')
      : right(
          `This executor meets the demands of only ${reachableClients.length} out of ${clients.length} clients` +
            `\n\nAvailable clients sorted by ${
              sortBy === SortBy.reward ? 'highest reward' : 'distance to executor'
            }:` +
            `${getReachableClientsTable(sort(callableClientsSort)(reachableClients))}`,
        );
  };

export const main = (sortBy: SortBy): Promise<string> =>
  Promise.all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) =>
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse(err => err), // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      ),
    );
