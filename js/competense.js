import { Competence, CompetenceManager } from "./competencesManager.js"; 

const competence1 = new Competence(1, "loic", "cjdkhkjskdakj");
const competence2 = new Competence(2, "jaures", "cjdkhkjskdakj");
const competence3 = new Competence(3, "dilane", "cjdkhkjskdakj");

const manager = new CompetenceManager();

manager.addCompetence(competence1);
manager.addCompetence(competence2);
manager.addCompetence(competence3);
console.log(manager.listCompetece());
