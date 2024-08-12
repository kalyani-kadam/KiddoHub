class Parent{
    constructor(parentId,creation_date,updated_on,address,emailId,name,phoneNo,password){
        console.log("in class"+phoneNo);
        this.parentId=parentId
        this.creation_date=creation_date
        this.updated_on=updated_on
        this.address=address
        this.emailId=emailId
        this.name=name
        this.phoneNo=phoneNo
        this.password=password
        console.log("in class below "+phoneNo);
    }
}

export default Parent;