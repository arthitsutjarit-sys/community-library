
const newsContainer = document.getElementById('news-container');

const news = [
{
title:'ข่าวการศึกษา',
desc:'อัปเดตข่าวด้านการศึกษาและเทคโนโลยี',
link:'https://www.thaipbs.or.th/news'
},
{
title:'ข่าวชุมชน',
desc:'ติดตามข่าวท้องถิ่นและกิจกรรมชุมชน',
link:'https://www.khaosod.co.th'
},
{
title:'ข่าวเทคโนโลยี',
desc:'ข่าวสารด้านดิจิทัลและนวัตกรรม',
link:'https://www.beartai.com'
}
];

news.forEach(item=>{

const div = document.createElement('div');

div.className='book-card';

div.innerHTML=`
<div class="book-content">
<span>ข่าวล่าสุด</span>
<h3>${item.title}</h3>
<p>${item.desc}</p>
<br>
<a class="btn-primary" href="${item.link}" target="_blank">อ่านข่าว</a>
</div>
`;

newsContainer.appendChild(div);

});
