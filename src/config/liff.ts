import { ApiFilled } from "@ant-design/icons";
import liff from "@line/liff";
import { getCustomerWithLiffID } from "../App/API";

export const initLIFF = async () => {
  try {
    const res = await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID,
    });
    const profileData = await liff.getProfile();

    localStorage.setItem("line_profile", JSON.stringify(profileData));
  } catch (error: any) {
    console.log({ error });

    liff.login();
  }
};

export const getMe = async () => {
  try {
    const lineProfile = localStorage.getItem("line_profile") as any;
    const profileData = JSON.parse(lineProfile);

    const user = await getCustomerWithLiffID(profileData.userId);

    return { user: user.data };
  } catch (error: any) {
    console.log({ error });

    if (error.response.status === 401) {
      // return redirect("/");
      window.location.href = "/";
    }
  }
};

export const login = async () => {
  try {
    await liff.login();
    const accessToken = liff.getAccessToken();
    return accessToken;
  } catch (error: any) {
    console.error("LIFF Login failed", error.message);
  }
};
