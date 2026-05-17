import DataService from "./requestApi";

async function generateApiAction(func, ...args) {
  let responseObj = {
    data: null,
    error: null,
  };

  try {
    const response = args.length
      ? await func(...args)
      : await func();

    console.log("API RESPONSE:", response);

    if (response) {
      responseObj.data = response.data;
    }
  } catch (error) {
    console.error("API ERROR:", error);

    responseObj.error =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";
  }

  return responseObj;
}

export const CallFindMediaFiles = async (data) => {
  return await generateApiAction(DataService.FindMediaFiles, data);
}