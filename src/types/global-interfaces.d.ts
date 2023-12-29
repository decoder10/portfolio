interface ITeam {
  name: string;
  position: string;
  image: string;
  linkedin: string;
}

interface IExperience {
  position: string;
  employer: string;
  list: Nullable<string[]>;
  date: string;
}

interface IContacts {
  image: string;
  path: string;
}
