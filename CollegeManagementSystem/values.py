import requests

method = "POST"
baseurl = "http://127.0.0.1:8000/"

###################################################################################
# one
Department = {}

Department[1] = {'deptname':'COMPUTER SCIENCE','deptlocation':'Pune University'}
Department[2] = {'deptname':'CHEMISTRY','deptlocation':'Pune University'}
Department[3] = {'deptname':'PHYSICS','deptlocation':'Pune University'}


###################################################################################
# two


Courses = {}

Courses[1] = {'coursename':'MCA','courseduration':4}
Courses[2] = {'coursename':'MSC','courseduration':2}


###################################################################################
#three

Semester = {}

Semester[1] = {'semdetails':'MCA Sem-1','semduration': 6,'courseid': 1}
Semester[2] = {'semdetails':'MCA Sem-2','semduration': 6,'courseid': 1}
Semester[3] = {'semdetails':'MCA Sem-3','semduration': 6,'courseid': 1}
Semester[4] = {'semdetails':'MCA Sem-4','semduration': 6,'courseid': 1}

Semester[5] = {'semdetails':'MSC Sem-1','semduration':6 ,'courseid':2}
Semester[6] = {'semdetails':'MSC Sem-2','semduration':6 ,'courseid':2}



###################################################################################
#four 


Faculty = {}

Faculty[1] ={'facultyname':'PATIL SIR','facultymobileno':837800789,'facultyemail':'patil@gmail.com','facultysalary':10000, 'courseid': 1}
Faculty[2] ={'facultyname':'DMK SIR','facultymobileno':703029804,'facultyemail':'dmk@gmail.com','facultysalary':10000, 'courseid': 2}
Faculty[3] ={'facultyname':'AKR SIR','facultymobileno':848583310,'facultyemail':'akr@gmail.com','facultysalary':10000, 'courseid': 1}
Faculty[4] ={'facultyname':'JYOTI MAM','facultymobileno':1234567899,'facultyemail':'jy@gmail.com','facultysalary':10000, 'courseid': 2}




###################################################################################
#five


Subject = {}

Subject[1] = {'subname':'IP','courseid':1,'semid':1}
Subject[2] = {'subname':'CMGT','courseid':1,'semid':2}
Subject[3] = {'subname':'MF','courseid':1,'semid':1}
Subject[4] = {'subname':'OS','courseid':1,'semid':2}
Subject[5] = {'subname':'CN','courseid':1,'semid':1}
Subject[6] = {'subname':'DS','courseid':1,'semid':2}
Subject[7] = {'subname':'ACN','courseid':2,'semid':1}
Subject[8] = {'subname':'DOS','courseid':2,'semid':2}
Subject[9] = {'subname':'AI','courseid':2,'semid':1}
Subject[10] = {'subname':'PA','courseid':2,'semid':2}
Subject[11] = {'subname':'ADT','courseid':2,'semid':1}
Subject[12] = {'subname':'SD','courseid':2,'semid':2}



###################################################################################
#six    

studDict = {}

studDict[1] = {'studname': 'arati', 'studaddress': 'BMT', 'studmobileno':70302980, 'studemail': 'arati@gmail.com', 'deptid': 1, 'courseid': 1, 'semid': 1}
studDict[2] = {'studname': 'sushil', 'studaddress': 'BMT', 'studmobileno':837800789, 'studemail': 'sush@gmail.com', 'deptid': 1, 'courseid': 1, 'semid': 2}
studDict[3] = {'studname': 'samruddhi', 'studaddress': 'Ajangaon', 'studmobileno':976758579, 'studemail': 'sam@gmail.com', 'deptid': 1, 'courseid': 2, 'semid': 1}
studDict[4] = {'studname': 'Bhaji', 'studaddress': 'Shegaon', 'studmobileno':982307059, 'studemail': 'pooja@gmail.com', 'deptid': 1, 'courseid': 2, 'semid': 2}
studDict[5] = {'studname': 'Anki', 'studaddress': 'Satara', 'studmobileno':860523288, 'studemail': 'anki@gmail.com', 'deptid': 2, 'courseid': 1, 'semid': 1}
studDict[6] = {'studname': 'pasha', 'studaddress': 'Jamkhed', 'studmobileno':848583310, 'studemail': 'pasha@gmail.com', 'deptid': 2, 'courseid': 1, 'semid': 2}
studDict[7] = {'studname': 'suraj', 'studaddress': 'DunkinVasti', 'studmobileno':976237910, 'studemail': 'suraj@gmail.com', 'deptid': 2, 'courseid': 2, 'semid': 1}
studDict[8] = {'studname': 'raj', 'studaddress': 'Daund', 'studmobileno':937039438, 'studemail': 'raj@gmail.com', 'deptid': 2, 'courseid': 2, 'semid': 2}
studDict[9] = {'studname': 'vishal', 'studaddress': 'Pune', 'studmobileno':750734855, 'studemail': 'vishal@gmail.com', 'deptid': 3, 'courseid': 1, 'semid': 1}
studDict[10] = {'studname': 'sagar', 'studaddress': 'Daund', 'studmobileno':12345679, 'studemail': 'sagar@gmail.com', 'deptid': 3, 'courseid': 1, 'semid': 2}
studDict[11] = {'studname': 'siddharth', 'studaddress': 'Pune', 'studmobileno':987654321, 'studemail': 'sid@gmail.com', 'deptid': 3, 'courseid': 2, 'semid': 1}
studDict[12] = {'studname': 'suhas', 'studaddress': 'Indapur', 'studmobileno':789123456, 'studemail': 'suhas@gmail.com', 'deptid': 3, 'courseid': 2, 'semid': 2}




###################################################################################
# seven

SubjectFaculty = {}

SubjectFaculty[1] = {'subcode' :1 , 'facultyid':1 }
SubjectFaculty[2] = {'subcode' :2 , 'facultyid':2 }
SubjectFaculty[3] = {'subcode' :3 , 'facultyid':3 }
SubjectFaculty[4] = {'subcode' :4 , 'facultyid':4 }
SubjectFaculty[5] = {'subcode' :5 , 'facultyid':1 }
SubjectFaculty[6] = {'subcode' :6 , 'facultyid':2 }
SubjectFaculty[7] = {'subcode' :7 , 'facultyid':3 }
SubjectFaculty[8] = {'subcode' :8 , 'facultyid':4 }
SubjectFaculty[9] = {'subcode' :9 , 'facultyid':1 }
SubjectFaculty[10] = {'subcode' :10 , 'facultyid':2 }
SubjectFaculty[11] = {'subcode' :11 , 'facultyid':3 }
SubjectFaculty[12] = {'subcode' :12 , 'facultyid':4 }



###################################################################################
#eight

Parent = {}

Parent[1] = {'parentname':'Bhagwan Jadhav','srn':1,'sdn':1}
Parent[2] = {'parentname':'Sanjay Bhile','srn':2,'sdn':1}
Parent[3] = {'parentname':'Kalpana Jadhav','srn':1,'sdn':2}
Parent[4] = {'parentname':'Bharati Bhile','srn':2,'sdn':2}
Parent[5] = {'parentname':'Gokul Jadhav','srn':3,'sdn':3}
Parent[6] = {'parentname':'Lalaso Jadhav','srn':3,'sdn':3}






# url = baseurl + "department/"
# for i in Department:
#     print("came")
#     requests.post(url, Department[i])
#     print(url, Department[i])

# url = baseurl + "course/"
# for i in Courses:
#     requests.post(url, Courses[i])
#     print(url, Courses[i])


# url = baseurl + "semester/"
# for i in Semester:
#     requests.post(url, Semester[i])
#     print(url, Semester[i])


# url = baseurl + "faculty/"
# for i in Faculty:
#     requests.post(url, Faculty[i])
#     print(url, Faculty[i])


# url = baseurl + "subject/"
# for i in Subject:
#     requests.post(url, Subject[i])
#     print(url, Subject[i])


# url = baseurl + "student/"
# for i in studDict:
#     requests.post(url, studDict[i])
#     print(url, studDict[i])


# url = baseurl + "subjectfaculty/"
# for i in SubjectFaculty:
#     requests.post(url, SubjectFaculty[i])
#     print(url, SubjectFaculty[i])


# url = baseurl + "parent/"
# for i in Parent:
#     requests.post(url, Parent[i])
#     print(url, Parent[i])
