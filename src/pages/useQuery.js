export const useQuery = ({ van, run }) => {
  const isLoading = van.state(false);
  const data = van.state();
  const error = van.state();

  const runAction = async () => {
    try {
      isLoading.val = true;
      const result = await run();
      data.val = result;
    } catch (e) {
      error.val = e;
    } finally {
      isLoading.val = false;
    }
  };
  runAction();
  return { isLoading, data, error };
};
