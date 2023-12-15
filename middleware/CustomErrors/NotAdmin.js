class NotAdminError extends Error{
    constructor(message){
       super(message);
       this.name="Not A Admin Exception";
    }
}

