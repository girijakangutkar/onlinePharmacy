import { useAuthCheck } from "../utils/authUtils";

const ProtectedAction = ({
  children,
  fallbackComponent = null,
  showLoginPrompt = true,
  onUnauthorized = null,
}) => {
  const { isAuthenticated, requireAuth } = useAuthCheck();

  if (!isAuthenticated) {
    if (onUnauthorized) {
      onUnauthorized();
    }

    if (showLoginPrompt) {
      return (
        <>
          {/* <p className="text-sm text-yellow-800 mb-2">
            Please login to continue with this action
          </p> */}
          <button
            onClick={() => requireAuth()}
            className="bg-[#b82929] p-2 w-[80%] rounded-md text-white m-3 ml-0 font-medium"
          >
            Buy
          </button>
        </>
      );
    }

    return fallbackComponent;
  }

  return children;
};

export default ProtectedAction;
