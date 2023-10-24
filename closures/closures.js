this.table = "window.table";

this.garbage = {
  table: "garbage table",
  cleantable()
     {console.log('garbage is working &{this.table}')}
}
console.log(this.garbage.table);
this.garbage.cleantable();