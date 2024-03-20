const List = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Somecompnent />
    </Suspense>
  );
};

const Somecompnent = () => {
  const loadableAtom = loadable(asyncAtom);
  // usequeyr,
  return <div>loadableAtom</div>;
};
