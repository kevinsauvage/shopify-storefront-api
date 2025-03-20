export {};

declare global {
  type metafieldsSetInput = {
    compareDigest?: string;
    key: string;
    namespace: string;
    ownerId: string;
    type?: string;
    value: string;
  };
}
