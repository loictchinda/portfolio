export class Competence{
    constructor(id, title, description){
        if(typeof(id) !== 'number' || typeof(title) !== 'string' || typeof(description) !== 'string'){
            throw new TypeError('Erreur de format !!!');
        }
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

export class CompetenceManager{
    constructor(){
        this.competences = [];
    }
    addCompetence(competence){
        if(!(competence instanceof Competence)){
            throw new TypeError("Only competences objects can be added");
        }
        this.competences.push(competence);
    }
    editCompetence(id, CompetenceUpdate){
        const competence = this.competences.find(competence => competence.id === id);
        if(!competence){
            throw new Error(`competence with id ${id} not found`);
        }
        Object.assign(competence, CompetenceUpdate);
    }
    deleteCompetence(id){
        const index = this.competences.findIndex(competence => competence.id);
        this.competences.splice(index, 1);
    }
    searchCompetenceByTitle(title){
        return this.competences.filter(competence => competence.title.toLowerCase().includes(title.toLowerCase()));
    }
    searchCompetenceById(id){
        if(!this.competences[id - 1]){
            throw new TypeError(`Competence id == ${id} not found`)
        }
        return this.competences[id - 1];
    }
    listCompetece(){
        return this.competences;
    }
}