import Field from "../common/Field/Field";
import Vote from "../common/Vote/Vote";

/*-------Movies details----------*/
/*props :   */
/*  - movie */

const MovieDetails = (props) => {
  const { movie } = props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const title = `${movie.date.toLocaleDateString(
    "fr-FR",
    options
  )} en salle / ${movie.duration} / ${movie.gender}`;

  const by = movie.by.join(", ");
  const actors = movie.actors.join(", ");

  return (
    <div>
      <Field value={title} />
      <Field header="Par" value={by} />
      <Field header="Avec" value={actors} />
      <Field header="Synopsis" value={movie.synopsis} />
      <Field value={movie.limit} />
      <Vote header="Spectateurs" note={movie.publicNote} color="#33CCCC" />
    </div>
  );
};

export default MovieDetails;
