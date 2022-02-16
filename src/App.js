import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SeachInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaulfLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "おら",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "qqqq@example.com",
  phone: "111-1111-1111",
  company: {
    name: "ああ株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout className="App">
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト2</SecondaryButton>
        <br />
        <SeachInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
