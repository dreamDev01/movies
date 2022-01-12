/*Gender types of movies*/
export class Gender {
  // Create new instances of the same class as static attributes
  static Horror = new Gender("Horreur");
  static Action = new Gender("Action");
  static Drama = new Gender("Dramatique");
  static Comedy = new Gender("Comedie");
  static Gangster = new Gender("Gangster");
  static Fantastic = new Gender("Fantastique");

  constructor(name) {
    this.name = name;
  }
}
