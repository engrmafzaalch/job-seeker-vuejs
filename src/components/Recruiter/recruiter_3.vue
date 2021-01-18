<template>
  <div class="container-fluid">
    <div class="tab-content">
      <div class="tab-content-inner">
        <div class="row-custom">
          <ul class="row-inr">
            <li class="profile-recutier list">
              <div class="recurtier-main">
                <div class="img-otr">
                  <img class="img-inr" src="./user-img.png" alt="user">
                </div>
                <div class="recruiter-otr">
                  <h6 class="recruiter-head">Recruiter A</h6>
                  <p class="recruiter-desc">Consultant at Company A Pvt Ltd</p>
                </div>
              </div>
              <div class="email-otr same-otr">
                <p class="email-inr same-head">Email Address</p>
                <p class="email same-desc">user@gmail.com</p>
              </div>
              <div class="contact-num same-otr">
                <p class="contact same-head">Contact Information</p>
                <p class="num same-desc">+ 9988776655</p>
              </div>
              <div class="address-otr same-otr">
                <p class="address-inr same-head">Address</p>
                <p class="address same-desc">Plot 470, Abogo Lagerma Road Off Constitution <br> Avenue, Off Constitution Avenue</p>
              </div>
            </li>
            <li class="second1 list">
              <h4 class="company-det">
                Company Details
              </h4>
              <p class="company-desc-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                Proin gravida <br> dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                sic tempor. Sociis natoque <br> penatibus et magnis dis parturient.
              </p>
              <p class="company-desc-2">
                Sed nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                felis tellus mollis orci, sed <br> rhoncus pronin sapien nunc accuan eget.
                <a class="read-more" href="">READ MORE</a>
              </p>
            </li>
            <li class="third list">
              <p class="Industry">Industry</p>
              <ul class="industry-inr">
                <li class="Industry-list">
                  Healthcare
                </li>
                <li class="Industry-list">
                  Telecom
                </li>
                <li class="Industry-list">
                  IT
                </li>
              </ul>
            </li>
            <li class="same list">
              <h4 class="first">Date of founding</h4>
              <p class="second">05 Jun 1985</p>
            </li>
            <li class="same list">
              <h4 class="first">Website</h4>
              <p class="second">www.companya.com</p>
            </li>
            <li class="same list">
              <h4 class="first">CAC Number</h4>
              <p class="second">www.companya.com</p>
            </li>
            <li class="same list">
              <h4 class="first">No. of Employees</h4>
              <p class="second">450</p>
            </li>
            <li class="flex-col list">
              <h4 class="address-last">Address</h4>
              <p class="second-col">Plot 470, Abogo Lagerma Road Off Constitution <br> Avenue, Off Constitution Avenue</p>
            </li>
            <li class="last-li list">
              <div class="action">
                <a class="action-btn cancel-btn" href="">Cancel</a>
                <a class="action-btn approve-btn" href="">Approve Account</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recruiter_3"
}



// var dataSet = [
//   [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
//   [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
//   [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
//   [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
//   [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
//   [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
//   [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
//   [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
//   [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
//   [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
//   [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
//   [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
//   [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
//   [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
//   [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
//   [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
//   [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
//   [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
//   [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
//   [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
//   [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
//   [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
//   [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
//   [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
//   [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
//   [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
//   [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
//   [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
//   [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
//   [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
//   [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
//   [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
//   [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
//   [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
//   [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
//   [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
// ];
//
// $.each(dataSet, function(i, data) {
//   data.splice(0, 0, i + 1)
// })
//
// $(document).ready(function() {
//  const t = $('#example2').DataTable( {
//     data: dataSet,
//    pagingType: 'numbers',
//    language: {
//      //"info": "Displaying (_PAGE_) of _PAGES_",   // https://datatables.net/reference/option/language
//      paginate: {
//        next: '<span class="paginate_button previous icon-right"><img src="src/assets/Vector-right.svg" alt="<"></span>',
//        previous: '<span class="paginate_button next icon-left"><img src="src/assets/Vector-left.svg" alt=">"></span>'
//      },
//    },
//
//    'columnDefs': [
//      {  className: "my_second_class", targets: 6 },
//      {  className: "my_second_status", targets: 5 },
//      {
//        'targets': 6,
//        'render': function(data, type, row) {
//          //return x('p');
//          return 1;
//
//
//        }
//
//
//      }
//    ],
//     "orderClasses": false,
//     columns: [
//       { title: "#" },
//       { title: "Name" },
//       { title: "Email Address" },
//       { title: "Registration No" },
//       { title: "Last Login" },
//       { title: "Status" },
//       { title: "" },
//     ],
//   } );
//   t.on('order.dt search.dt', function() {
//     t.column(6, {
//       search: 'applied',
//       order: 'applied'
//     }).nodes().each(function(cell, i) {
//       cell.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n'+
//         '<path d="M9 20C9 20 13 12 20 12C27 12 31 20 31 20C31 20 27 28 20 28C13 28 9 20 9 20Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'+
//         '<path d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'+
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n'+
//         '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n' +
//         '<path d="M9 12V18H15" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<path d="M31 28V22H25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<path d="M31 22.0001L26.36 26.3601C25.2853 27.4354 23.9556 28.2209 22.4952 28.6433C21.0348 29.0657 19.4911 29.1113 18.0083 28.7758C16.5255 28.4403 15.1518 27.7346 14.0155 26.7247C12.8791 25.7147 12.0172 24.4333 11.51 23.0001M28.49 17.0001C27.9828 15.5669 27.1209 14.2855 25.9845 13.2755C24.8482 12.2655 23.4745 11.5598 21.9917 11.2243C20.5089 10.8888 18.9652 10.9344 17.5048 11.3568C16.0444 11.7793 14.7147 12.5648 13.64 13.6401L9 18.0001L28.49 17.0001Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
//         '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#00BA67" fill-opacity="0.1"/>\n' +
//         '<path d="M28 14L17 25L12 20" stroke="#00BA67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
//         '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n' +
//         '<path d="M11 14H13H29" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<path d="M16 14V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H22C22.5304 10 23.0391 10.2107 23.4142 10.5858C23.7893 10.9609 24 11.4696 24 12V14M27 14V28C27 28.5304 26.7893 29.0391 26.4142 29.4142C26.0391 29.7893 25.5304 30 25 30H15C14.4696 30 13.9609 29.7893 13.5858 29.4142C13.2107 29.0391 13 28.5304 13 28V14H27Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<path d="M18 19V25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<path d="M22 19V25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
//         '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
//         '</svg>\n';
//     });
//   }).draw();
//   $(document).ready(function(){
//     // Redraw the table
//     table.draw();
//
//     // Redraw the table based on the custom input
//     $('#searchInput, #sortBy').bind("keyup change", function(){
//       t.draw();
//     });
//   });
//
//   $('#filterbox').keyup(function(){
//     t.search(this.value).draw();
//   });
// } );
//
// // $('.wrapper .nav-tabs a').click(function() {
// //   let position = $(this).parent().position();
// //   let width = $(this).parent().width();
// //   $(".wrapper .slider").css({'left':+ position.left,"width":width});
// // });
// // let actWidth = $('.wrapper .nav-tabs').find('.active').parent('li').width();
// // let actPosition = $('.wrapper .nav-tabs .active').position();
// // $('.wrapper .slider').css({'left':+ actPosition.left,'width': actWidth});


</script>

<style scoped>
.container-fluid{
  padding: 0 80px !important;
}

.container-fluid .tile{

}

.container-fluid {

}

.container-fluid .nav-tabs{
  margin: 48px 0 32px 0;
  position:relative;
  border:none!important;
  width: 600px;
}

.container-fluid .nav-tabs .active{
  border-bottom: 3px solid #0385F3 !important;
  color:#0385F3!important;
  border-top: none;
  border-left: none;
  border-right: none;
}

/* #my-account .container-fluid #tile-1 .slider{
    display:inline-block;
    width:30px;
    height:4px;
    border-radius:3px;
    background-color:#0385F3;
    position:absolute;
    z-index:1200;
    bottom:0;
    transition: .1s;
} */

.container-fluid .nav-tabs .nav-item{
  margin:0px!important;
}

.container-fluid .nav-tabs .nav-item .nav-link{
  position:relative;
  margin-right:0px!important;
  padding: 12px 32px!important;
  font-size:16px;
  color:#8B90A0;
  border-bottom: 1px solid #8B90A0;
  font-size: 14px;
}

.container-fluid .nav-tabs .nav-item .nav-link:hover{
  border-bottom: 3px solid #0385F3 !important;
  border-top: none;
  border-left: none;
  border-right: none;
}

/* #my-account .container-fluid #tile-1 .nav-tabs .nav-link {
    border: none !important;
    border-bottom: 1px solid #8B90A0 !important;
} */

.container-fluid .tab-content{

}

.container-fluid .tab-content .tab-content-inner{

}

.container-fluid .tab-content .tab-content-inner .row-custom{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr{
  border: 1px solid #F0F1F3;
  border-radius: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .profile-recutier{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list{
  padding: 32px 0;
  margin: 0 32px;
  border-bottom: 1px solid #F0F1F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .img-otr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .img-otr .img-inr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr{
  padding-left: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr .recruiter-head{
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr .recruiter-desc{
  font-size: 16px;
  line-height: 24px;
  color: #0385F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .Industry{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
  padding-right: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr{
  display: flex;
  align-items: center;
}
.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr .Industry-list:not(:first-child){
  margin-right: 16px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr .Industry-list{
  padding: 10px 32px;
  border-radius: 24px;
  background-color: #FAFAFC;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-otr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-head{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-desc{
  font-size: 16px;
  line-height: 24px;
  color: #505565;
}


.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .profile-recutier{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-det{
  font-size: 18px;
  line-height: 24px;
  color: #8B90A0;
  padding-bottom: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-1{
  font-size: 16px;
  line-height: 32px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-2{
  font-size: 16px;
  line-height: 32px;
  color: #8B90A0;
  padding-top: 16px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-2 .read-more{
  font-size: 16px;
  line-height: 32px;
  text-decoration-line: underline;
  color: #0385F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .same{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .first{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second{
  font-size: 14px;
  line-height: 24px;
  padding-left: 55px;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col{
  display: flex;
  flex-direction: column;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col .address-last{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
  padding-bottom: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col .second-col{
  font-size: 14px;
  line-height: 24px;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .cancel-btn{
  padding: 12px 0;
  width: 235px;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .approve-btn{
  padding: 12px 0;
  width: 235px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .action-btn{

}
</style>
