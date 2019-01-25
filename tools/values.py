import requests

method = "POST"
baseurl = "http://127.0.0.1:8000/"

###################################################################################
# one
Department = {}

Department[1] = {'deptname':'Computer Science','deptlocation':'Near Main Building'}
Department[2] = {'deptname':'Chemistry','deptlocation':'Opposite Aniket Canteen'}
Department[3] = {'deptname':'Mathematics','deptlocation':'Opp of Health Center'}


###################################################################################
# two


Courses = {}

Courses[1] = {'coursename':'MCA','courseduration':4, 'deptid':1}
Courses[2] = {'coursename':'MSC','courseduration':2, 'deptid':1}
Courses[3] = {'coursename':'M Tech','courseduration':2, 'deptid':1}
Courses[4] = {'coursename':'Organic Chemistry','courseduration':2, 'deptid':2}
Courses[5] = {'coursename':'Physical Chemistry','courseduration':4, 'deptid':2}
Courses[6] = {'coursename':'In-Organic Chemistry','courseduration':4, 'deptid':2}
Courses[7] = {'coursename':'Spectoscopy Chemistry','courseduration':6, 'deptid':2}
Courses[8] = {'coursename':'Algebra','courseduration':2, 'deptid':3}
Courses[9] = {'coursename':'Geometry','courseduration':4, 'deptid':3}
Courses[10] = {'coursename':'Statistics','courseduration':6, 'deptid':3}



###################################################################################
#three

Semester = {}

Semester[1] = {'semdetails':'MCA Sem-1','semduration': 6,'courseid': 1}
Semester[2] = {'semdetails':'MCA Sem-2','semduration': 6,'courseid': 1}
Semester[3] = {'semdetails':'MCA Sem-3','semduration': 6,'courseid': 1}
Semester[4] = {'semdetails':'MCA Sem-4','semduration': 6,'courseid': 1}

Semester[5] = {'semdetails':'MSC Sem-1','semduration':6 ,'courseid':2}
Semester[6] = {'semdetails':'MSC Sem-2','semduration':6 ,'courseid':2}

Semester[7] = {'semdetails':'M Tech Sem-1','semduration':6 ,'courseid':3}
Semester[8] = {'semdetails':'M Tech Sem-2','semduration':6 ,'courseid':3}

Semester[9] = {'semdetails':'Organic Chemistry Sem-1','semduration':6 ,'courseid':4}
Semester[10] = {'semdetails':'Organic Chemistry Sem-2','semduration':6 ,'courseid':4}

Semester[11] = {'semdetails':'Physical Chemistry Sem-1','semduration':6 ,'courseid':5}
Semester[12] = {'semdetails':'Physical Chemistry Sem-2','semduration':6 ,'courseid':5}
Semester[13] = {'semdetails':'Physical Chemistry Sem-3','semduration':6 ,'courseid':5}
Semester[14] = {'semdetails':'Physical Chemistry Sem-4','semduration':6 ,'courseid':5}

Semester[15] = {'semdetails':'In-Organic Chemistry Sem-1','semduration':6 ,'courseid':6}
Semester[16] = {'semdetails':'In-Organic Chemistry Sem-2','semduration':6 ,'courseid':6}
Semester[17] = {'semdetails':'In-Organic Chemistry Sem-3','semduration':6 ,'courseid':6}
Semester[18] = {'semdetails':'In-Organic Chemistry Sem-4','semduration':6 ,'courseid':6}

Semester[19] = {'semdetails':'Spectoscopy Chemistry Sem-1','semduration':6 ,'courseid':7}
Semester[20] = {'semdetails':'Spectoscopy Chemistry Sem-2','semduration':6 ,'courseid':7}
Semester[21] = {'semdetails':'Spectoscopy Chemistry Sem-3','semduration':6 ,'courseid':7}
Semester[22] = {'semdetails':'Spectoscopy Chemistry Sem-4','semduration':6 ,'courseid':7}
Semester[23] = {'semdetails':'Spectoscopy Chemistry Sem-5','semduration':6 ,'courseid':7}
Semester[24] = {'semdetails':'Spectoscopy Chemistry Sem-6','semduration':6 ,'courseid':7}

Semester[25] = {'semdetails':'Algebra Sem-1','semduration':6 ,'courseid':8}
Semester[26] = {'semdetails':'Algebra Sem-2','semduration':6 ,'courseid':8}

Semester[27] = {'semdetails':'Geometry Sem-1','semduration':6 ,'courseid':9}
Semester[28] = {'semdetails':'Geometry Sem-2','semduration':6 ,'courseid':9}
Semester[29] = {'semdetails':'Geometry Sem-3','semduration':6 ,'courseid':9}
Semester[30] = {'semdetails':'Geometry Sem-4','semduration':6 ,'courseid':9}

Semester[31] = {'semdetails':'Statistics Sem-1','semduration':6 ,'courseid':10}
Semester[32] = {'semdetails':'Statistics Sem-2','semduration':6 ,'courseid':10}
Semester[33] = {'semdetails':'Statistics Sem-3','semduration':6 ,'courseid':10}
Semester[34] = {'semdetails':'Statistics Sem-4','semduration':6 ,'courseid':10}
Semester[35] = {'semdetails':'Statistics Sem-5','semduration':6 ,'courseid':10}
Semester[36] = {'semdetails':'Statistics Sem-6','semduration':6 ,'courseid':10}


###################################################################################
#four 


Faculty = {}

Faculty[1] ={'fusername':'patilsir','passwd':'p','facultyname':'PATIL SIR','facultymobileno':837800789,'facultyemail':'patil@gmail.com','facultysalary':10000, 'courseid': 1}
Faculty[2] ={'fusername':'dmksir','passwd':'dmksir','facultyname':'DMK SIR','facultymobileno':703029804,'facultyemail':'dmk@gmail.com','facultysalary':10000, 'courseid': 2}
Faculty[3] ={'fusername':'aksir','passwd':'akrsir','facultyname':'AKR SIR','facultymobileno':848583310,'facultyemail':'akr@gmail.com','facultysalary':10000, 'courseid': 1}
Faculty[4] ={'fusername':'jyotimam','passwd':'j','facultyname':'JYOTI MAM','facultymobileno':1234567899,'facultyemail':'jy@gmail.com','facultysalary':10000, 'courseid': 2}




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

studDict[1] = {'susername':'arati','passwd':'s','studname': 'arati', 'studaddress': 'BMT', 'studmobileno':70302980, 'studemail': 'arati@gmail.com', 'deptid': 1, 'courseid': 1, 'semid': 1}
studDict[2] = {'susername':'sushil','passwd':'s','studname': 'sushil', 'studaddress': 'BMT', 'studmobileno':837800789, 'studemail': 'sush@gmail.com', 'deptid': 1, 'courseid': 1, 'semid': 2}
studDict[3] = {'susername':'samruddhi','passwd':'s','studname': 'samruddhi', 'studaddress': 'Ajangaon', 'studmobileno':976758579, 'studemail': 'sam@gmail.com', 'deptid': 1, 'courseid': 2, 'semid': 1}
studDict[4] = {'susername':'bhaji','passwd':'s','studname': 'Bhaji', 'studaddress': 'Shegaon', 'studmobileno':982307059, 'studemail': 'pooja@gmail.com', 'deptid': 1, 'courseid': 2, 'semid': 2}
studDict[5] = {'susername': 'Anki','passwd':'s','studname': 'Anki', 'studaddress': 'Satara', 'studmobileno':860523288, 'studemail': 'anki@gmail.com', 'deptid': 2, 'courseid': 1, 'semid': 1}
studDict[6] = {'susername': 'pasha','passwd':'s','studname': 'pasha', 'studaddress': 'Jamkhed', 'studmobileno':848583310, 'studemail': 'pasha@gmail.com', 'deptid': 2, 'courseid': 1, 'semid': 2}
studDict[7] = {'susername': 'suraj','passwd':'s','studname': 'suraj', 'studaddress': 'DunkinVasti', 'studmobileno':976237910, 'studemail': 'suraj@gmail.com', 'deptid': 2, 'courseid': 2, 'semid': 1}
studDict[8] = {'susername': 'raj','passwd':'s','studname': 'raj', 'studaddress': 'Daund', 'studmobileno':937039438, 'studemail': 'raj@gmail.com', 'deptid': 2, 'courseid': 2, 'semid': 2}
studDict[9] = {'susername': 'vishal','passwd':'s','studname': 'vishal', 'studaddress': 'Pune', 'studmobileno':750734855, 'studemail': 'vishal@gmail.com', 'deptid': 3, 'courseid': 1, 'semid': 1}
studDict[10] = {'susername': 'sagar','passwd':'s','studname': 'sagar', 'studaddress': 'Daund', 'studmobileno':12345679, 'studemail': 'sagar@gmail.com', 'deptid': 3, 'courseid': 1, 'semid': 2}
studDict[11] = {'susername': 'siddharth','passwd':'s','studname': 'siddharth', 'studaddress': 'Pune', 'studmobileno':987654321, 'studemail': 'sid@gmail.com', 'deptid': 3, 'courseid': 2, 'semid': 1}
studDict[12] = {'susername': 'suhas','passwd':'s','studname': 'suhas', 'studaddress': 'Indapur', 'studmobileno':789123456, 'studemail': 'suhas@gmail.com', 'deptid': 3, 'courseid': 2, 'semid': 2}




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

Parent[1] = {'pusername':'b','passwd':'b','parentname':'Bhagwan Jadhav','srn':1,'sdn':1}
Parent[2] = {'pusername':'c','passwd':'c','parentname':'Sanjay Bhile','srn':2,'sdn':1}
Parent[3] = {'pusername':'d','passwd':'d','parentname':'Kalpana Jadhav','srn':1,'sdn':2}
Parent[4] = {'pusername':'e','passwd':'e','parentname':'Bharati Bhile','srn':2,'sdn':2}
Parent[5] = {'pusername':'f','passwd':'f','parentname':'Gokul Jadhav','srn':3,'sdn':3}
Parent[6] = {'pusername':'g','passwd':'g','parentname':'Lalaso Jadhav','srn':3,'sdn':3}



count = 0


url = baseurl + "departments/"
for i in Department:
    requests.post(url, Department[i])
    print(Department[i])
    count += 1

url = baseurl + "courses/"
for i in Courses:
    requests.post(url, Courses[i])
    print(url, Courses[i])
    count += 1


url = baseurl + "semesters/"
for i in Semester:
    requests.post(url, Semester[i])
    print(url, Semester[i])
    count += 1


url = baseurl + "facultys/"
for i in Faculty:
    requests.post(url, Faculty[i])
    print(url, Faculty[i])
    count += 1


url = baseurl + "subject/"
for i in Subject:
    requests.post(url, Subject[i])
    print(url, Subject[i])
    count += 1

url = baseurl + "students/"
for i in studDict:
    requests.post(url, studDict[i])
    print(url, studDict[i])
    count += 1


url = baseurl + "subjectfaculty/"
for i in SubjectFaculty:
    requests.post(url, SubjectFaculty[i])
    print(url, SubjectFaculty[i])
    count += 1


url = baseurl + "parents/"
for i in Parent:
    requests.post(url, Parent[i])
    print(url, Parent[i])
    count += 1

print("\nRecords Entered: ",count)