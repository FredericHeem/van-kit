export const asyncView = ({ context, getModule, Loader }) => {
  const { tr, van } = context;
  const { div } = van.tags;
  const loading = van.state(false);
  const error = van.state("");
  const view = van.state("");

  const fetchModule = async () => {
    try {
      loading.val = true;
      const module = await getModule();
      view.val = module.default(context);
    } catch (e) {
      error.val = tr("Error loading");
    } finally {
      loading.val = false;
    }
  };

  return function AsyncView() {
    fetchModule();
    return div(
      () => (loading.val ? Loader() : ""),
      error,
      () => (view.val ? view.val() : "")
    );
  };
};
