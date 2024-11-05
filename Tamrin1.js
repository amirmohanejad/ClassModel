//فیلد های کلاس
class Student {
    constructor(fName = '', lName = '', id = '', score = 0, major = '') {
      this.fName = fName;
      this.lName = lName;
      this.id = id;
      this.score = score;
      this.major = major;
    }
  }
  
//پیشفرض constructor استفاده از
  const student1 = new Student();
  
//با مقادیر دلخواه constructor استفاده از
  const student2 = new Student('Amir', 'Mohamadi', '85', 20, 'Computer');
  
//getter
console.log(student2.fName);
//setter
student2.fName = 'Amir mahdi';
