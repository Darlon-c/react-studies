import Profile from "./components/Profile.jsx";
import picture from "/picture.avif";

export default function App() {
  return (
    <>
      <Profile
        set="add"
        avatar={picture}
        name="Darlon"
        bio="Desenvolvedor Front-end"
        email="darlon@email.com"
        phone="(11) 99999-9999"
        githubUrl="https://github.com/darlon-c"
        linkedinUrl="https://www.linkedin.com/in/darloncosta050/"
      ></Profile>
    </>
  );
}
