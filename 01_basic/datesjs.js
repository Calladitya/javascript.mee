//DATES
let myDate= new Date()
// console.log(myDate)//2025-01-19T14:35:27.678Z//ye ek value h jo numbers me given h jo ki difficult read krna
// console.log(myDate.toString())//Sun Jan 19 2025 14:37:04 GMT+0000 (Coordinated Universal Time)//ab agar hm dekhe to ye ekdm sahi time de raha h hame
// console.log(myDate.getDate())//19
// console.log(myDate.toISOString())//2025-01-19T14:46:42.865Z
// console.log(myDate.toDateString())//Sun Jan 19 2025
// console.log(myDate.toLocaleDateString())//1/19/2025
// console.log(myDate.toLocaleString())//1/19/2025, 2:46:42 PM
// console.log(myDate.toTimeString())//14:46:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString())//Sun, 19 Jan 2025 14:46:42 GMT


//let myCreatedDate = new Date(2024,4,15)
//console.log(myCreatedDate)//ye phirse kuch essi value de raha h//2024-01-15T00:00:00.000Z//h to hame isse string me change krna padega
//console.log(myCreatedDate.toDateString())//Mon Jan 15 2024//h to ye hame bta raha h ki monday date  h 15 jan ke din
//(2024,4,15)=>2024 ye hamara year h,ye jo 4 h ye month ko denote krta h,or ye jo 15 h date or day ko point kr raha h
//let myCreatedDate = new Date(2024,4,15,5,6,8)//5/15/2024, 5:06:08 AM
//let myCreatedDate = new Date(2024,4,15,5,6,8,6,3,9,6,3,5)//maximum 6 no hi daal sakte h isse jada nhi 
//console.log(myCreatedDate.toLocaleString())


//let myCreatedDate = new Date("01-19-2024")
//console.log(myCreatedDate.getTime())
//console.log(Date.now())

newDate.toLocaleString(`default`,{
    weekday: "long",
})