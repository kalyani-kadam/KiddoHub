class Child{
    constructor(childId,name, dateOfBirth, gender, allergies, medicalInfo,
         emergencyContact,  emailId,  password, childRegStatusEnum, parent){
        this.childId = childId;    
        this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.allergies = allergies;
		this.medicalInfo = medicalInfo;
		this.emergencyContact = emergencyContact;
		this.emailId = emailId;
		this.password = password;
		this.childRegStatusEnum = childRegStatusEnum;
		this.parent = parent;
    }
}
export default Child;