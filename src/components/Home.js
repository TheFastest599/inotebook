import Notes from './Notes';

function Home(props) {
  return (
    <div>
      <Notes showAlert={props.showAlert}></Notes>
    </div>
  );
}

export default Home;
