import Resolver from '@forge/resolver';

const resolver = new Resolver();
export const handler = resolver.getDefinitions();

export const postfunction = async (payload) => {
  console.log('postfunction', payload);
};

export { config } from './MacroConfig';
