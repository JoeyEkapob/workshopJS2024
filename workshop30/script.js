const userdata = [
    {
        name:"พิมลี่พลอย",
        job:"พนักงานประจำ",
        text:"อากาศดี อาหารอร่อย ห้องพักสะอาดมาก",
        image:"https://randomuser.me/api/portraits/women/86.jpg"
    },
    {
        name:"ก้อง รักสยาม",
        job:"โปรแกรมเมอร์",
        text:"อากาศดีมากครับ อาหารสะอาดอร่อย เจ้าของร้านใจดีมาก จะมาอุดหนุนใหม่นะครับ",
        image:"https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        name:"พี่ตูนคนหล่อ",
        job:"รับราชการ",
        text:"อาหารสะอาดอร่อย วิวที่ร้านสวยมาก เจ้าของร้านใจดีและอากาศดีมากครับ ",
        image:"https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        name:"พี่โจโจ้",
        job:"นักเขียน",
        text:"อาหารอร่อย วิวสวย แต่ที่จอดรถน้อยไปหน่อย!",
        image:"https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        name:"น้องตั๊กแตน",
        job:"พนักงานโรงแรม",
        text:"ราคาเป็นกันเอง อาหารโคตรอร่อย เจ้าของร้านและพนักงานน่ารัก",
        image:"https://randomuser.me/api/portraits/women/33.jpg"
    }
];
const review = document.querySelector('.review')
const userimg = document.querySelector('.user-img')
const username = document.querySelector('.username')
const userjob = document.querySelector('.userjob')

let avtiveindex = 0;

function showreview(){
    const {name,job,text,image} = userdata[avtiveindex];
    review.innerHTML=text
    userimg.innerHTML=image
    username.innerHTML=name
    userjob.innerHTML=job

    avtiveindex++
}
if(avtiveindex>userdata.length){
    avtiveindex=0
}
setInterval(showreview,10000);