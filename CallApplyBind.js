person1={
    fn:"a",
    sn:"b",
    printName:function(){   
    alert(this.fn+" "+this.sn)
}
}
person2={
    fn:"c",
    sn:"d",
    printName:function(){   
    alert(this.fn+" "+this.sn)
}
}
person3={
    fn:"e",
    sn:"f",
    printName:function(){   
    alert(this.fn+" "+this.sn)
}
}
person1.printName.call(person2)
a=person2.printName.bind(person3)
a()
//.call(person2);