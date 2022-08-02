import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const router = useRouter();

  const query = router.query;

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User id: {user.id} </h1>
        <div> User name: {user.name} </div>
        <div> User email: {user.email} </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
}
