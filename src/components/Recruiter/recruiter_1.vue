<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="tabs-btn">
        <ul class="nav nav-tabs nav-justified" role="tablist">
          <div class="slider"></div>
          <li class="nav-item">
            <a class="nav-link active" id="account-details-tab" data-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="true">Payments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="support-messages-tab" data-toggle="tab" href="#support-messages" role="tab" aria-controls="support-messages" aria-selected="false">Settings</a>
          </li>
        </ul>
<!--        <a href="#" class="new-payment">-->
<!--          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--          </svg>-->
<!--          Record New Payment-->
<!--        </a>-->
      </div>
      <div class="payment-btn">
        <div class="col-lg-2">
          <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <p>Payment Received so far</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
        <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <div class="price-left">
                <p>Payment</p>
                <div class="select-otr">
                  <select>
                    <option value="volvo">Today</option>
                    <option value="saab">Mon</option>
                    <option value="opel">Tue</option>
                    <option value="audi">Wed</option>
                    <option value="saab">Thur</option>
                    <option value="opel">Fri</option>
                    <option value="audi">Sat</option>
                    <option value="audi">Sun</option>
                  </select>
                  <svg class="arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div class="col-lg-2">
          <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <p>Payment Received so far</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <p>Payment Received so far</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <div class="price-left">
                <p>Payment</p>
                <div class="select-otr">
                  <select>
                    <option value="volvo">Today</option>
                    <option value="saab">Mon</option>
                    <option value="opel">Tue</option>
                    <option value="audi">Wed</option>
                    <option value="saab">Thur</option>
                    <option value="opel">Fri</option>
                    <option value="audi">Sat</option>
                    <option value="audi">Sun</option>
                  </select>
                  <svg class="arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="left-btn">
            <div class="inner-left-content">
              <strong>20,000</strong>
              <div class="price-left">
                <p>Payment</p>
                <div class="select-otr">
                  <select>
                    <option value="volvo">Today</option>
                    <option value="saab">Mon</option>
                    <option value="opel">Tue</option>
                    <option value="audi">Wed</option>
                    <option value="saab">Thur</option>
                    <option value="opel">Fri</option>
                    <option value="audi">Sat</option>
                    <option value="audi">Sun</option>
                  </select>
                  <svg class="arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="message-wrapper">
        <div class="left-table-header">
          <div class="input-outer">
            <input class="input" id="filterbox" type="text" placeholder="Search Support Messages" aria-label="Search">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#505565"/>
            </svg>
          </div>
          <svg class="menu-icon" width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="48" height="44" rx="4" fill="#FAFAFC"/>
            <path d="M16 32V25" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 21V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 32V23" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 19V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32 32V27" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32 23V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 25H19" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 19H27" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29 27H35" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect y="1" width="48" height="44" rx="4" stroke="#F0F1F3"/>
          </svg>
<!--          <div class="select-otr">-->
<!--            <select>-->
<!--              <option value="volvo">Today</option>-->
<!--              <option value="saab">Mon</option>-->
<!--              <option value="opel">Tue</option>-->
<!--              <option value="audi">Wed</option>-->
<!--              <option value="saab">Thur</option>-->
<!--              <option value="opel">Fri</option>-->
<!--              <option value="audi">Sat</option>-->
<!--              <option value="audi">Sun</option>-->
<!--            </select>-->
<!--            <svg class="arrow" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M0 0L5 5L10 0H0Z" fill="#A1A4B1"/>-->
<!--            </svg>-->
<!--          </div>-->
        </div>

      </div>
      <table id="example2" class="display" width="100%">
        <thead class="table-head">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Registration No</th>
          <th>Last Login</th>
          <th>Status</th>
          <th></th>
        </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "recruiter_1"
}



var dataSet = [
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
  [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
  [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
  [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
  [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
  [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
  [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
  [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
  [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
  [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
  [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
  [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
  [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
  [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
  [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
  [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
  [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
  [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
  [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
  [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
  [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
  [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
  [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
  [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
  [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
  [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
  [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
  [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
  [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

$.each(dataSet, function(i, data) {
  data.splice(0, 0, i + 1)
})

$(document).ready(function() {
 const t = $('#example2').DataTable( {
    data: dataSet,
   pagingType: 'numbers',
   language: {
     //"info": "Displaying (_PAGE_) of _PAGES_",   // https://datatables.net/reference/option/language
     paginate: {
       next: '<span class="paginate_button previous icon-right"><img src="src/assets/Vector-right.svg" alt="<"></span>',
       previous: '<span class="paginate_button next icon-left"><img src="src/assets/Vector-left.svg" alt=">"></span>'
     },
   },

   'columnDefs': [
     {  className: "my_second_class", targets: 6 },
     {  className: "my_second_status", targets: 5 },
     {
       'targets': 6,
       'render': function(data, type, row) {
         //return x('p');
         return 1;


       }


     }
   ],
    "orderClasses": false,
    columns: [
      { title: "#" },
      { title: "Name" },
      { title: "Email Address" },
      { title: "Registration No" },
      { title: "Last Login" },
      { title: "Status" },
      { title: "" },
    ],
  } );
  t.on('order.dt search.dt', function() {
    t.column(6, {
      search: 'applied',
      order: 'applied'
    }).nodes().each(function(cell, i) {
      cell.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n'+
        '<path d="M9 20C9 20 13 12 20 12C27 12 31 20 31 20C31 20 27 28 20 28C13 28 9 20 9 20Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'+
        '<path d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'+
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n'+
        '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n' +
        '<path d="M9 12V18H15" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M31 28V22H25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M31 22.0001L26.36 26.3601C25.2853 27.4354 23.9556 28.2209 22.4952 28.6433C21.0348 29.0657 19.4911 29.1113 18.0083 28.7758C16.5255 28.4403 15.1518 27.7346 14.0155 26.7247C12.8791 25.7147 12.0172 24.4333 11.51 23.0001M28.49 17.0001C27.9828 15.5669 27.1209 14.2855 25.9845 13.2755C24.8482 12.2655 23.4745 11.5598 21.9917 11.2243C20.5089 10.8888 18.9652 10.9344 17.5048 11.3568C16.0444 11.7793 14.7147 12.5648 13.64 13.6401L9 18.0001L28.49 17.0001Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
        '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#00BA67" fill-opacity="0.1"/>\n' +
        '<path d="M28 14L17 25L12 20" stroke="#00BA67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
        '</svg>\n <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" fill="#FAFAFC"/>\n' +
        '<path d="M11 14H13H29" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M16 14V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H22C22.5304 10 23.0391 10.2107 23.4142 10.5858C23.7893 10.9609 24 11.4696 24 12V14M27 14V28C27 28.5304 26.7893 29.0391 26.4142 29.4142C26.0391 29.7893 25.5304 30 25 30H15C14.4696 30 13.9609 29.7893 13.5858 29.4142C13.2107 29.0391 13 28.5304 13 28V14H27Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M18 19V25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M22 19V25" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<rect x="0.5" y="0.5" width="39" height="39" rx="1.5" stroke="#F0F1F3"/>\n' +
        '</svg>\n';
    });
  }).draw();
  $(document).ready(function(){
    // Redraw the table
    table.draw();

    // Redraw the table based on the custom input
    $('#searchInput, #sortBy').bind("keyup change", function(){
      t.draw();
    });
  });

  $('#filterbox').keyup(function(){
    t.search(this.value).draw();
  });
} );

// $('.wrapper .nav-tabs a').click(function() {
//   let position = $(this).parent().position();
//   let width = $(this).parent().width();
//   $(".wrapper .slider").css({'left':+ position.left,"width":width});
// });
// let actWidth = $('.wrapper .nav-tabs').find('.active').parent('li').width();
// let actPosition = $('.wrapper .nav-tabs .active').position();
// $('.wrapper .slider').css({'left':+ actPosition.left,'width': actWidth});


</script>

<style scoped>
.container-fluid{
  padding: 0 80px !important;
}
.container-fluid .wrapper .tabs-btn{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.container-fluid .wrapper .tabs-btn .new-payment{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: #0385F3;
  text-decoration: none;
  color: white;
  font-family: "Open Sans";
  border-radius: 4px;

}
.container-fluid .wrapper .tabs-btn .new-payment svg{
  margin-right: 15px;

}

.container-fluid .wrapper .tabs-btn .nav-tabs{
  margin: 48px 0 32px 0;
  position:relative;
  border:none!important;
  width: 400px;
}

.container-fluid .wrapper .tabs-btn .nav-tabs .active{
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

.container-fluid .wrapper .tabs-btn .nav-tabs .nav-item{
  margin:0px!important;
}

.container-fluid .wrapper .tabs-btn .nav-tabs .nav-item .nav-link{
  position:relative;
  margin-right:0px!important;
  padding: 12px 32px!important;
  font-size:16px;
  color:#8B90A0;
  border-bottom: 1px solid #8B90A0;
  font-size: 14px;
}

.container-fluid .wrapper .tabs-btn .nav-tabs .nav-item .nav-link:hover{
  border-bottom: 3px solid #0385F3 !important;
  border-top: none;
  border-left: none;
  border-right: none;
}

/* #my-account .container-fluid #tile-1 .nav-tabs .nav-link {
    border: none !important;
    border-bottom: 1px solid #8B90A0 !important;
} */
.container-fluid .wrapper .payment-btn{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.container-fluid .wrapper .payment-btn .left-btn{
  background-color: #FAFDFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
  display: inline-flex;
  padding: 20px 40px 20px 20px;
}
/*.container-fluid .wrapper .payment-btn .left-btn .inner-left-content{*/
/*  margin-left: 20px;*/
/*}*/
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content p{
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content strong{
  font-size: 24px;
  line-height: 32px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content .price-left{
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content .price-left svg{
  margin-left: 4px;
}

.container-fluid .wrapper .payment-btn .left-btn .price-left .select-otr{
  position: relative;
  margin-left: 5px;
  /*border: 1px solid #A1A4B1;*/
  /*border-radius: 4px;*/
  /*width: 96px;*/
}

.container-fluid .wrapper .message-wrapper .left-table-header .menu-icon{
  margin: 0 20px;
}
select{
  width: 70px;
  border-radius: 4px;
  color: #0385F3;
  /*background: #FFFFFF;*/
  /*padding: 12px 16px;*/
  border: none;
  appearance: none;
}
select:focus{
  outline: none;
}
.container-fluid .wrapper .payment-btn .left-btn .price-left .select-otr .arrow{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}


.container-fluid .wrapper .payment-btn .right-btn{
  background-color: #FAFDFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
  display: inline-flex;
  padding: 20px 24px;
}
.container-fluid .wrapper .payment-btn .right-btn .inner-right-content{
  margin-left: 20px;
}
.container-fluid .wrapper .payment-btn .right-btn .inner-right-content p{
  margin-bottom: 8px;
}
.container-fluid .wrapper .payment-btn .right-btn .inner-right-content strong{
  font-size: 24px;
  line-height: 32px;
}
.container-fluid .wrapper .payment-btn .right-btn .inner-right-content .price-right{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.container-fluid .wrapper .payment-btn .right-btn .inner-right-content .price-right svg{
  margin-left: 4px;
}
.container-fluid .wrapper .display .table-head{
  background: #FAFDFF;
  border: 1px solid #F0F1F3;
  border-radius: 8px !important;
}


.container-fluid .wrapper .message-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 40px 48px 38px;
}

/*.container-fluid .wrapper .message-wrapper .left-table-header .input-outer{*/
/*  margin-left: 19px;*/
/*}*/
.container-fluid .wrapper .message-wrapper .left-table-header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


.container-fluid .wrapper .message-wrapper .input-outer{
  position: relative;
  width: 420px;
}

.container-fluid .wrapper .message-wrapper .input-outer .input{
  width: 100%;
  padding: 12px 14px 12px 44px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.container-fluid .wrapper .message-wrapper .input-outer .input::placeholder{
  color: #8B90A0;
}

.container-fluid .wrapper .message-wrapper .input-outer .search-icon{
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
}
.container-fluid .wrapper .message-wrapper .left-table-header .select-otr{
  position: relative;
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  /*width: 96px;*/
}
.container-fluid .wrapper .message-wrapper .left-table-header .menu-icon{
  margin: 0 20px;
}
/*select{*/
/*  width: 96px;*/
/*  border-radius: 4px;*/
/*  color: #8B90A0;*/
/*  background: #FFFFFF;*/
/*  padding: 12px 16px;*/
/*  border: none;*/
/*  appearance: none;*/
/*}*/
/*select:focus{*/
/*  outline: none;*/
/*}*/
.container-fluid .wrapper .message-wrapper .left-table-header .select-otr .arrow{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}

.container-fluid .wrapper .display .table-head tr th{
  padding: 28px 44px;
}

.paginate_button .previous .icon-left {
  background: url(/src/assets/Vector-left.svg) no-repeat center rgba(109, 113, 248, .2);
  background-size: 10px;
  color: #ffffff;
  width: 40px;
  height: 35px;
  display: inline-block;
  padding: 0;
  margin-right: -2px;
}

.icon-left:focus {
  border: none;
  outline: none; }

.icon-right:focus {
  border: none;
  outline: none; }

.paginate_button .next .icon-right {
  background: url(/src/assets/Vector-right.svg) no-repeat center #6D71F8;
  background-size: 10px;
  color: #ffffff;
  width: 40px;
  height: 35px;
  display: inline-block;
  padding: 0
}

</style>
