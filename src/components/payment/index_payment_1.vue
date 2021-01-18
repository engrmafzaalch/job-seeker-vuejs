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
        <a href="#" class="new-payment">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Record New Payment
        </a>
      </div>
      <div class="payment-btn">
        <div class="left-btn">
          <svg width="64" height="50" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.9717 12.4099C61.9018 10.3116 60.153 8.56287 58.0547 8.63289H53.2285V24.8602L53.7181 26.399V35.5618H54.5574C57.0754 35.5618 59.5235 35.9115 61.9016 36.6809H61.9715V12.4798C61.9717 12.4798 61.9717 12.4099 61.9717 12.4099Z" fill="#2BA037"/>
            <path d="M45.0448 37.1005L45.3945 37.2405V37.5901C45.3945 37.7301 45.3945 37.87 45.4643 37.9398H45.3945V42.0665H44.9049L41.6873 41.9266H41.4775C41.7573 41.0173 41.9671 39.9681 41.9671 38.9889C41.9671 38.2895 41.8973 37.59 41.7573 36.8906H42.0372L45.0448 37.1005Z" fill="#F4B844"/>
            <path d="M38.9595 31.9945C40.9181 32.4841 42.8765 32.6939 44.9049 32.6939C49.871 32.6939 54.1376 31.365 54.4174 29.8262V34.8622C49.6611 34.9321 45.7442 36.0513 45.2546 37.4502L44.9049 37.3103L42.1771 37.1704H41.8973C41.4775 35.2119 40.4285 33.3934 38.8896 32.0644L38.9595 31.9945Z" fill="#E5A739"/>
            <path d="M8.04359 31.295H26.649L26.8588 32.2742C24.9002 33.953 23.7811 36.471 23.7811 39.059C23.7811 39.5486 23.851 39.9683 23.9211 40.4579H11.8905C9.79219 40.4579 8.04346 38.7093 8.04346 36.6109C8.04359 36.6109 8.04359 31.295 8.04359 31.295Z" fill="#2BA037"/>
            <path d="M50.0808 0.0994873H3.91692C1.7486 0.0994873 0.0698852 1.77807 0 3.94639V28.0775V28.1474C0.0698852 30.2457 1.81862 31.9945 3.91692 31.9244H26.5793L26.7891 32.2042C28.4678 30.6654 30.6361 29.8261 32.8743 29.8261C33.7836 29.8261 34.6929 29.966 35.6021 30.2459L53.9278 24.86V8.63271V3.94639C53.9278 1.84809 52.1792 0.0994873 50.0808 0.0994873Z" fill="#3BB54A"/>
            <path d="M26.9989 5.97485C32.5946 5.97485 37.0711 10.4514 37.0711 16.047C37.0711 21.6427 32.5946 26.1192 26.9989 26.1192C21.4033 26.1192 16.9268 21.6427 16.9268 16.047C16.9269 10.4514 21.4033 5.97485 26.9989 5.97485Z" fill="#2BA037"/>
            <path d="M7.06442 9.68194C8.60962 9.68194 9.86225 8.42932 9.86225 6.88412C9.86225 5.33893 8.60962 4.0863 7.06442 4.0863C5.51923 4.0863 4.2666 5.33893 4.2666 6.88412C4.2666 8.42932 5.51923 9.68194 7.06442 9.68194Z" fill="#2BA037"/>
            <path d="M64.0001 42.4164V47.0328C64.0001 48.6415 59.8034 49.9005 54.6275 49.9005C49.4515 49.9005 45.3247 48.6415 45.3247 47.0328V42.8361C46.0941 44.235 49.9411 45.2842 54.5575 45.2842C59.1739 45.2842 64.0001 43.9552 64.0001 42.4164Z" fill="#E5A739"/>
            <path d="M64.0001 37.9398V42.4164C64.0001 43.9552 59.6635 45.2841 54.5575 45.2841C49.4514 45.2841 46.0941 44.2348 45.3247 42.8359V38.1496C45.8843 39.5485 49.8012 40.6676 54.5575 40.6676C59.3137 40.6676 63.6504 39.4786 64.0001 37.9398Z" fill="#F4B844"/>
            <path d="M64.0002 37.9398C63.6505 39.4786 59.5237 40.6676 54.5575 40.6676C49.5914 40.6676 45.8843 39.5485 45.3248 38.1496C45.2549 38.0097 45.2549 37.9398 45.2549 37.7999V37.4502C45.7445 36.0513 49.6614 34.9322 54.4177 34.8622H54.5576C57.0757 34.8622 59.5238 35.2119 61.9019 35.9813C63.2308 36.4709 64.0002 37.1004 64.0002 37.7999V37.9398Z" fill="#FEDB41"/>
            <path d="M45.3243 42.8361V46.5432H44.8347C42.9462 46.5432 41.0577 46.3334 39.1692 45.9137H39.0293C40.2883 44.7946 41.1976 43.3957 41.6173 41.787H41.8271L44.8347 41.9269H45.3243V42.8361Z" fill="#E5A739"/>
            <path d="M54.4177 25.6994V29.8261C54.1379 31.3649 49.8712 32.6938 44.9051 32.6938C42.8767 32.6938 40.9182 32.484 38.9598 31.9944H38.8899C37.9806 31.225 36.8615 30.5955 35.6724 30.2458V25.3497C35.9522 26.8185 40.009 28.0076 44.9751 28.0076C49.9413 28.0076 53.5784 27.0283 54.4177 25.6994Z" fill="#F4B844"/>
            <path d="M54.4174 25.7693C53.5781 27.0982 49.4513 28.0776 44.9049 28.0776C40.3585 28.0776 35.8819 26.8884 35.6021 25.4197C35.5322 25.3498 35.5322 25.2798 35.5322 25.2099C35.5322 23.6711 39.729 22.3422 44.9049 22.3422C48.8918 22.3422 52.5289 23.1116 53.9278 24.2307C54.2775 24.4405 54.5573 24.7903 54.5573 25.2099C54.5573 25.4197 54.5573 25.6294 54.4174 25.7693Z" fill="#FEDB41"/>
            <path d="M42.2468 37.1704C42.3167 37.7999 42.3867 38.4294 42.3867 39.0589C42.3867 39.9682 42.2468 40.8775 42.037 41.7867C41.5474 43.3954 40.6381 44.8643 39.3092 46.0533C35.4622 49.5505 29.447 49.2709 25.9497 45.4238C24.6906 44.0249 23.8514 42.3462 23.5715 40.5277C23.5017 40.0381 23.4316 39.5485 23.4316 39.1288C23.4316 36.4709 24.5507 33.8829 26.5792 32.0644C29.0972 29.8262 32.5245 29.0568 35.742 30.1059C37.001 30.4556 38.1201 31.0851 39.0995 31.9245C40.708 33.2535 41.8271 35.0721 42.2468 37.1704Z" fill="#FEDB41"/>
            <path d="M32.9441 34.3727C35.5322 34.3727 37.6305 36.471 37.6305 39.059C37.6305 41.647 35.5322 43.7453 32.9441 43.7453C30.3561 43.7453 28.2578 41.647 28.2578 39.059C28.2577 36.471 30.3561 34.3727 32.9441 34.3727Z" fill="#F4B844"/>
          </svg>
            <div class="inner-left-content">
              <p>Payment Received so far</p>
              <div class="price-left">
                <strong>20,000</strong>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.975 13.2003C11.7477 13.2003 11.5414 13.1672 11.362 13.1024C11.1837 13.0388 11.013 12.9345 10.8554 12.7935C10.6969 12.6521 10.5457 12.4829 10.4079 12.2901C10.2675 12.0936 10.1271 11.8934 9.99134 11.6952L8.13046 8.84243H4.97948V11.7677C4.97948 12.2421 4.86954 12.6032 4.65305 12.8424C4.4343 13.083 4.16152 13.1999 3.81947 13.1999C3.46536 13.1999 3.19032 13.0817 2.97816 12.8387C2.76638 12.5971 2.65907 12.2366 2.65907 11.7677V8.84243H0.85561C0.383848 8.84243 0 8.45858 0 7.98682C0 7.51506 0.383848 7.13121 0.85561 7.13121H2.65907V5.67093H0.85561C0.383848 5.67112 0 5.28727 0 4.8157C0 4.34413 0.383848 3.96009 0.85561 3.96009H2.65907V1.82794C2.65907 1.41585 2.70388 1.09206 2.79217 0.865964C2.90248 0.604292 3.07605 0.402108 3.32568 0.240587C3.5753 0.0786897 3.83754 0 4.12726 0C4.35109 0 4.54537 0.0365212 4.7035 0.108999C4.86596 0.18317 5.00358 0.279556 5.12444 0.403614C5.24755 0.529556 5.37481 0.694842 5.5032 0.894202C5.63517 1.0994 5.77127 1.31306 5.91566 1.54123L7.51431 3.96009H11.0433V1.43261C11.0433 0.951807 11.1463 0.588479 11.3492 0.352221C11.5529 0.115211 11.821 0 12.1685 0C12.5277 0 12.8031 0.115399 13.0098 0.352786C13.2156 0.588856 13.3197 0.952372 13.3197 1.43261V3.96009H15.1444C15.6162 3.96009 16 4.34394 16 4.8157C16 5.28746 15.6162 5.67112 15.1444 5.67112H13.3197V7.13159H15.1444C15.6162 7.13159 16 7.51525 16 7.9872C16 8.45896 15.6162 8.84243 15.1444 8.84243H13.3197V11.5659C13.3197 12.6657 12.8799 13.2003 11.975 13.2003ZM4.6971 8.27767H8.28351C8.37877 8.27767 8.46781 8.32587 8.51995 8.40569L10.4612 11.3818C10.5907 11.5719 10.7297 11.7686 10.8673 11.9618C10.981 12.1201 11.1037 12.2583 11.2321 12.3727C11.3355 12.4654 11.4431 12.532 11.5535 12.5713C11.6719 12.6145 11.8134 12.6359 11.9752 12.6359C12.304 12.6359 12.7551 12.6359 12.7551 11.5661V8.56005C12.7551 8.40418 12.8818 8.27767 13.0375 8.27767H15.1446C15.3052 8.27767 15.4354 8.14721 15.4354 7.98682C15.4354 7.82643 15.3052 7.69597 15.1446 7.69597H13.0373C12.8814 7.69597 12.7549 7.56947 12.7549 7.41359V5.38874C12.7549 5.23287 12.8814 5.10636 13.0373 5.10636H15.1444C15.3048 5.10636 15.4352 4.97609 15.4352 4.8157C15.4352 4.65531 15.3048 4.52485 15.1444 4.52485H13.0373C12.8814 4.52485 12.7549 4.39834 12.7549 4.24247V1.43261C12.7549 1.00904 12.6619 0.813253 12.5836 0.723456C12.5152 0.644767 12.4127 0.564571 12.1685 0.564571C11.9857 0.564571 11.8726 0.609563 11.7777 0.720068C11.7007 0.810241 11.6084 1.00678 11.6084 1.43242V4.24228C11.6084 4.39816 11.4819 4.52466 11.3261 4.52466H7.36239C7.26751 4.52466 7.17884 4.47703 7.12669 4.39797L5.44164 1.84808C5.29462 1.61653 5.15926 1.40399 5.02805 1.19992C4.92037 1.03219 4.81664 0.897026 4.71988 0.798005C4.64853 0.724398 4.56664 0.667357 4.46875 0.622553C4.38611 0.584714 4.2677 0.564571 4.12726 0.564571C3.94748 0.564571 3.79047 0.612199 3.63272 0.71442C3.4791 0.814006 3.3782 0.929782 3.31532 1.0785C3.28294 1.16133 3.22383 1.38008 3.22383 1.82794V4.24228C3.22383 4.39816 3.09733 4.52466 2.94145 4.52466H0.85561C0.695218 4.52485 0.564759 4.65531 0.564759 4.8157C0.564759 4.97609 0.695218 5.10636 0.85561 5.10636H2.94145C3.09733 5.10636 3.22383 5.23287 3.22383 5.38874V7.41378C3.22383 7.56965 3.09733 7.69616 2.94145 7.69616H0.85561C0.695218 7.69597 0.564759 7.82662 0.564759 7.98682C0.564759 8.14703 0.695218 8.27767 0.85561 8.27767H2.94145C3.09733 8.27767 3.22383 8.40418 3.22383 8.56005V11.7677C3.22383 12.0913 3.28596 12.3332 3.40324 12.4671C3.50621 12.5851 3.63046 12.6355 3.81947 12.6355C4.00075 12.6355 4.12462 12.5842 4.23456 12.4629C4.35222 12.3334 4.41472 12.0928 4.41472 11.7683V8.56005C4.41472 8.40418 4.54123 8.27767 4.6971 8.27767ZM11.3257 10.5224C11.2327 10.5224 11.1433 10.4761 11.09 10.3955L9.98005 8.71555C9.92301 8.62877 9.91792 8.51751 9.96743 8.4262C10.0168 8.33471 10.1126 8.27767 10.2157 8.27767H11.3257C11.4816 8.27767 11.6081 8.40418 11.6081 8.56005V10.24C11.6081 10.3646 11.526 10.4746 11.407 10.5105C11.3801 10.5184 11.3526 10.5224 11.3257 10.5224ZM10.7408 8.84243L11.0433 9.30026V8.84243H10.7408ZM11.3257 7.69597H9.45821C9.36333 7.69597 9.27466 7.64834 9.22252 7.56928L7.8846 5.54424C7.82718 5.45746 7.8221 5.3462 7.87142 5.25471C7.92075 5.1634 8.01638 5.10617 8.11992 5.10617H11.3257C11.4816 5.10617 11.6081 5.23268 11.6081 5.38855V7.41359C11.6081 7.56965 11.4816 7.69597 11.3257 7.69597ZM9.61013 7.13121H11.0433V5.67093H8.64495L9.61013 7.13121ZM7.53558 7.69597H4.6971C4.54123 7.69597 4.41472 7.56947 4.41472 7.41359V5.38874C4.41472 5.23287 4.54123 5.10636 4.6971 5.10636H6.21498C6.31024 5.10636 6.39928 5.15456 6.45143 5.23456L7.77221 7.2596C7.82888 7.34639 7.83321 7.45708 7.78407 7.54819C7.73456 7.6395 7.63931 7.69597 7.53558 7.69597ZM4.97948 7.13121H7.01431L6.06194 5.67093H4.97948V7.13121ZM5.46706 4.52504H4.6971C4.54123 4.52504 4.41472 4.39853 4.41472 4.24266V3.06212C4.41472 2.93712 4.4968 2.827 4.61653 2.79142C4.73607 2.75602 4.8654 2.80309 4.93355 2.90776L5.7035 4.08829C5.76017 4.17508 5.76487 4.28596 5.71555 4.37707C5.66604 4.468 5.57078 4.52504 5.46706 4.52504Z" fill="#232735"/>
                </svg>
              </div>

            </div>
        </div>
        <div class="right-btn">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8C2 6.89543 2.89543 6 4 6H56C57.1046 6 58 6.89543 58 8V56C58 57.1046 57.1046 58 56 58H4C2.89543 58 2 57.1046 2 56V8Z" fill="#C3C6C7"/>
            <path d="M0 6C0 4.89543 0.895431 4 2 4H52C53.1046 4 54 4.89543 54 6V52C54 53.1046 53.1046 54 52 54H2C0.895429 54 0 53.1046 0 52V6Z" fill="#E9EEF2"/>
            <path d="M0 6C0 4.89543 0.895431 4 2 4H52C53.1046 4 54 4.89543 54 6V14C54 15.1046 53.1046 16 52 16H2C0.895429 16 0 15.1046 0 14V6Z" fill="#EB423F"/>
            <path d="M11 4V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V7C9.0003 7.26513 9.10575 7.51931 9.29322 7.70678C9.48069 7.89425 9.73487 7.9997 10 8C10.2652 8 10.5196 8.10536 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10C9.20463 9.99907 8.44211 9.68271 7.8797 9.1203C7.31729 8.55789 7.00093 7.79537 7 7V3C7 2.20435 7.31607 1.44129 7.87868 0.87868C8.44129 0.316071 9.20435 0 10 0C10.7956 0 11.5587 0.316071 12.1213 0.87868C12.6839 1.44129 13 2.20435 13 3V4H11Z" fill="#6A7073"/>
            <path d="M19 4V3C19 2.73478 18.8946 2.48043 18.7071 2.29289C18.5196 2.10536 18.2652 2 18 2C17.7348 2 17.4804 2.10536 17.2929 2.29289C17.1054 2.48043 17 2.73478 17 3V7C17.0003 7.26513 17.1058 7.51931 17.2932 7.70678C17.4807 7.89425 17.7349 7.9997 18 8C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10C17.2046 9.99907 16.4421 9.68271 15.8797 9.1203C15.3173 8.55789 15.0009 7.79537 15 7V3C15 2.20435 15.3161 1.44129 15.8787 0.87868C16.4413 0.316071 17.2044 0 18 0C18.7956 0 19.5587 0.316071 20.1213 0.87868C20.6839 1.44129 21 2.20435 21 3V4H19Z" fill="#6A7073"/>
            <path d="M37 4V3C37 2.73478 36.8946 2.48043 36.7071 2.29289C36.5196 2.10536 36.2652 2 36 2C35.7348 2 35.4804 2.10536 35.2929 2.29289C35.1054 2.48043 35 2.73478 35 3V7C35.0003 7.26513 35.1057 7.51931 35.2932 7.70678C35.4807 7.89425 35.7349 7.9997 36 8C36.2652 8 36.5196 8.10536 36.7071 8.29289C36.8946 8.48043 37 8.73478 37 9C37 9.26522 36.8946 9.51957 36.7071 9.70711C36.5196 9.89464 36.2652 10 36 10C35.2046 9.99907 34.4421 9.68271 33.8797 9.1203C33.3173 8.55789 33.0009 7.79537 33 7V3C33 2.20435 33.3161 1.44129 33.8787 0.87868C34.4413 0.316071 35.2044 0 36 0C36.7956 0 37.5587 0.316071 38.1213 0.87868C38.6839 1.44129 39 2.20435 39 3V4H37Z" fill="#6A7073"/>
            <path d="M45 4V3C45 2.73478 44.8946 2.48043 44.7071 2.29289C44.5196 2.10536 44.2652 2 44 2C43.7348 2 43.4804 2.10536 43.2929 2.29289C43.1054 2.48043 43 2.73478 43 3V7C43.0003 7.26513 43.1057 7.51931 43.2932 7.70678C43.4807 7.89425 43.7349 7.9997 44 8C44.2652 8 44.5196 8.10536 44.7071 8.29289C44.8946 8.48043 45 8.73478 45 9C45 9.26522 44.8946 9.51957 44.7071 9.70711C44.5196 9.89464 44.2652 10 44 10C43.2046 9.99907 42.4421 9.68271 41.8797 9.1203C41.3173 8.55789 41.0009 7.79537 41 7V3C41 2.20435 41.3161 1.44129 41.8787 0.87868C42.4413 0.31607 43.2044 0 44 0C44.7956 0 45.5587 0.31607 46.1213 0.87868C46.6839 1.44129 47 2.20435 47 3V4H45Z" fill="#6A7073"/>
            <path d="M26 30C26 28.4087 25.3679 26.8826 24.2426 25.7574C23.1174 24.6321 21.5913 24 20 24C18.4087 24 16.8826 24.6321 15.7574 25.7574C14.6321 26.8826 14 28.4087 14 30C14 30.2652 14.1054 30.5196 14.2929 30.7071C14.4804 30.8946 14.7348 31 15 31C15.2652 31 15.5196 30.8946 15.7071 30.7071C15.8946 30.5196 16 30.2652 16 30C16 29.2089 16.2346 28.4355 16.6741 27.7777C17.1136 27.1199 17.7384 26.6072 18.4693 26.3045C19.2002 26.0017 20.0044 25.9225 20.7804 26.0769C21.5563 26.2312 22.269 26.6122 22.8284 27.1716C23.3878 27.731 23.7688 28.4437 23.9231 29.2196C24.0775 29.9956 23.9983 30.7998 23.6955 31.5307C23.3928 32.2616 22.8801 32.8864 22.2223 33.3259C21.5645 33.7654 20.7911 34 20 34C19.7348 34 19.4804 34.1054 19.2929 34.2929C19.1054 34.4804 19 34.7348 19 35C19 35.2652 19.1054 35.5196 19.2929 35.7071C19.4804 35.8947 19.7348 36 20 36C20.7911 36 21.5645 36.2346 22.2223 36.6741C22.8801 37.1137 23.3928 37.7384 23.6955 38.4693C23.9983 39.2002 24.0775 40.0044 23.9231 40.7804C23.7688 41.5563 23.3878 42.269 22.8284 42.8284C22.269 43.3878 21.5563 43.7688 20.7804 43.9232C20.0044 44.0775 19.2002 43.9983 18.4693 43.6955C17.7384 43.3928 17.1136 42.8801 16.6741 42.2223C16.2346 41.5645 16 40.7911 16 40C16 39.7348 15.8946 39.4804 15.7071 39.2929C15.5196 39.1054 15.2652 39 15 39C14.7348 39 14.4804 39.1054 14.2929 39.2929C14.1054 39.4804 14 39.7348 14 40C13.9996 41.0377 14.2684 42.0577 14.78 42.9605C15.2917 43.8633 16.0287 44.618 16.9192 45.1508C17.8096 45.6836 18.823 45.9764 19.8604 46.0005C20.8978 46.0247 21.9238 45.7794 22.838 45.2885C23.7523 44.7977 24.5237 44.0781 25.0767 43.2001C25.6298 42.3221 25.9457 41.3157 25.9936 40.2791C26.0415 39.2425 25.8197 38.2112 25.35 37.2859C24.8802 36.3607 24.1785 35.573 23.3134 35C24.1391 34.4531 24.8166 33.7103 25.2854 32.8378C25.7542 31.9654 25.9997 30.9904 26 30Z" fill="#6A7073"/>
            <path d="M34 24C32.4092 24.0018 30.8841 24.6345 29.7593 25.7593C28.6345 26.8841 28.0018 28.4092 28 30V40C28 41.5913 28.6321 43.1174 29.7574 44.2426C30.8826 45.3679 32.4087 46 34 46C35.5913 46 37.1174 45.3679 38.2426 44.2426C39.3679 43.1174 40 41.5913 40 40V30C39.9982 28.4092 39.3655 26.8841 38.2407 25.7593C37.1159 24.6345 35.5908 24.0018 34 24ZM38 40C38 41.0609 37.5786 42.0783 36.8284 42.8284C36.0783 43.5786 35.0609 44 34 44C32.9391 44 31.9217 43.5786 31.1716 42.8284C30.4214 42.0783 30 41.0609 30 40V30C30 28.9391 30.4214 27.9217 31.1716 27.1716C31.9217 26.4214 32.9391 26 34 26C35.0609 26 36.0783 26.4214 36.8284 27.1716C37.5786 27.9217 38 28.9391 38 30V40Z" fill="#6A7073"/>
          </svg>
          <div class="inner-right-content">
            <p>Received in July</p>
            <div class="price-right">
              <strong>3,000</strong>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.975 13.2003C11.7477 13.2003 11.5414 13.1672 11.362 13.1024C11.1837 13.0388 11.013 12.9345 10.8554 12.7935C10.6969 12.6521 10.5457 12.4829 10.4079 12.2901C10.2675 12.0936 10.1271 11.8934 9.99134 11.6952L8.13046 8.84243H4.97948V11.7677C4.97948 12.2421 4.86954 12.6032 4.65305 12.8424C4.4343 13.083 4.16152 13.1999 3.81947 13.1999C3.46536 13.1999 3.19032 13.0817 2.97816 12.8387C2.76638 12.5971 2.65907 12.2366 2.65907 11.7677V8.84243H0.85561C0.383848 8.84243 0 8.45858 0 7.98682C0 7.51506 0.383848 7.13121 0.85561 7.13121H2.65907V5.67093H0.85561C0.383848 5.67112 0 5.28727 0 4.8157C0 4.34413 0.383848 3.96009 0.85561 3.96009H2.65907V1.82794C2.65907 1.41585 2.70388 1.09206 2.79217 0.865964C2.90248 0.604292 3.07605 0.402108 3.32568 0.240587C3.5753 0.0786897 3.83754 0 4.12726 0C4.35109 0 4.54537 0.0365212 4.7035 0.108999C4.86596 0.18317 5.00358 0.279556 5.12444 0.403614C5.24755 0.529556 5.37481 0.694842 5.5032 0.894202C5.63517 1.0994 5.77127 1.31306 5.91566 1.54123L7.51431 3.96009H11.0433V1.43261C11.0433 0.951807 11.1463 0.588479 11.3492 0.352221C11.5529 0.115211 11.821 0 12.1685 0C12.5277 0 12.8031 0.115399 13.0098 0.352786C13.2156 0.588856 13.3197 0.952372 13.3197 1.43261V3.96009H15.1444C15.6162 3.96009 16 4.34394 16 4.8157C16 5.28746 15.6162 5.67112 15.1444 5.67112H13.3197V7.13159H15.1444C15.6162 7.13159 16 7.51525 16 7.9872C16 8.45896 15.6162 8.84243 15.1444 8.84243H13.3197V11.5659C13.3197 12.6657 12.8799 13.2003 11.975 13.2003ZM4.6971 8.27767H8.28351C8.37877 8.27767 8.46781 8.32587 8.51995 8.40569L10.4612 11.3818C10.5907 11.5719 10.7297 11.7686 10.8673 11.9618C10.981 12.1201 11.1037 12.2583 11.2321 12.3727C11.3355 12.4654 11.4431 12.532 11.5535 12.5713C11.6719 12.6145 11.8134 12.6359 11.9752 12.6359C12.304 12.6359 12.7551 12.6359 12.7551 11.5661V8.56005C12.7551 8.40418 12.8818 8.27767 13.0375 8.27767H15.1446C15.3052 8.27767 15.4354 8.14721 15.4354 7.98682C15.4354 7.82643 15.3052 7.69597 15.1446 7.69597H13.0373C12.8814 7.69597 12.7549 7.56947 12.7549 7.41359V5.38874C12.7549 5.23287 12.8814 5.10636 13.0373 5.10636H15.1444C15.3048 5.10636 15.4352 4.97609 15.4352 4.8157C15.4352 4.65531 15.3048 4.52485 15.1444 4.52485H13.0373C12.8814 4.52485 12.7549 4.39834 12.7549 4.24247V1.43261C12.7549 1.00904 12.6619 0.813253 12.5836 0.723456C12.5152 0.644767 12.4127 0.564571 12.1685 0.564571C11.9857 0.564571 11.8726 0.609563 11.7777 0.720068C11.7007 0.810241 11.6084 1.00678 11.6084 1.43242V4.24228C11.6084 4.39816 11.4819 4.52466 11.3261 4.52466H7.36239C7.26751 4.52466 7.17884 4.47703 7.12669 4.39797L5.44164 1.84808C5.29462 1.61653 5.15926 1.40399 5.02805 1.19992C4.92037 1.03219 4.81664 0.897026 4.71988 0.798005C4.64853 0.724398 4.56664 0.667357 4.46875 0.622553C4.38611 0.584714 4.2677 0.564571 4.12726 0.564571C3.94748 0.564571 3.79047 0.612199 3.63272 0.71442C3.4791 0.814006 3.3782 0.929782 3.31532 1.0785C3.28294 1.16133 3.22383 1.38008 3.22383 1.82794V4.24228C3.22383 4.39816 3.09733 4.52466 2.94145 4.52466H0.85561C0.695218 4.52485 0.564759 4.65531 0.564759 4.8157C0.564759 4.97609 0.695218 5.10636 0.85561 5.10636H2.94145C3.09733 5.10636 3.22383 5.23287 3.22383 5.38874V7.41378C3.22383 7.56965 3.09733 7.69616 2.94145 7.69616H0.85561C0.695218 7.69597 0.564759 7.82662 0.564759 7.98682C0.564759 8.14703 0.695218 8.27767 0.85561 8.27767H2.94145C3.09733 8.27767 3.22383 8.40418 3.22383 8.56005V11.7677C3.22383 12.0913 3.28596 12.3332 3.40324 12.4671C3.50621 12.5851 3.63046 12.6355 3.81947 12.6355C4.00075 12.6355 4.12462 12.5842 4.23456 12.4629C4.35222 12.3334 4.41472 12.0928 4.41472 11.7683V8.56005C4.41472 8.40418 4.54123 8.27767 4.6971 8.27767ZM11.3257 10.5224C11.2327 10.5224 11.1433 10.4761 11.09 10.3955L9.98005 8.71555C9.92301 8.62877 9.91792 8.51751 9.96743 8.4262C10.0168 8.33471 10.1126 8.27767 10.2157 8.27767H11.3257C11.4816 8.27767 11.6081 8.40418 11.6081 8.56005V10.24C11.6081 10.3646 11.526 10.4746 11.407 10.5105C11.3801 10.5184 11.3526 10.5224 11.3257 10.5224ZM10.7408 8.84243L11.0433 9.30026V8.84243H10.7408ZM11.3257 7.69597H9.45821C9.36333 7.69597 9.27466 7.64834 9.22252 7.56928L7.8846 5.54424C7.82718 5.45746 7.8221 5.3462 7.87142 5.25471C7.92075 5.1634 8.01638 5.10617 8.11992 5.10617H11.3257C11.4816 5.10617 11.6081 5.23268 11.6081 5.38855V7.41359C11.6081 7.56965 11.4816 7.69597 11.3257 7.69597ZM9.61013 7.13121H11.0433V5.67093H8.64495L9.61013 7.13121ZM7.53558 7.69597H4.6971C4.54123 7.69597 4.41472 7.56947 4.41472 7.41359V5.38874C4.41472 5.23287 4.54123 5.10636 4.6971 5.10636H6.21498C6.31024 5.10636 6.39928 5.15456 6.45143 5.23456L7.77221 7.2596C7.82888 7.34639 7.83321 7.45708 7.78407 7.54819C7.73456 7.6395 7.63931 7.69597 7.53558 7.69597ZM4.97948 7.13121H7.01431L6.06194 5.67093H4.97948V7.13121ZM5.46706 4.52504H4.6971C4.54123 4.52504 4.41472 4.39853 4.41472 4.24266V3.06212C4.41472 2.93712 4.4968 2.827 4.61653 2.79142C4.73607 2.75602 4.8654 2.80309 4.93355 2.90776L5.7035 4.08829C5.76017 4.17508 5.76487 4.28596 5.71555 4.37707C5.66604 4.468 5.57078 4.52504 5.46706 4.52504Z" fill="#232735"/>
              </svg>
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
            <svg class="arrow" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L5 5L10 0H0Z" fill="#A1A4B1"/>
            </svg>
          </div>
        </div>

      </div>
      <table id="example2" class="display" width="100%">
        <thead class="table-head">
        <tr>
          <th>#</th>
          <th>Support User</th>
          <th>User Email</th>
          <th>CreatedOn</th>
          <th>Last Login</th>
          <th>Ticket Handled</th>
          <th>Action</th>
        </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_payment_1"
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
      { title: "Support User" },
      { title: "User Email" },
      { title: "Created On" },
      { title: "Last Login" },
      { title: "Ticket Handled" },
      { title: "Action" },
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
  padding: 20px 24px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content{
  margin-left: 20px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content p{
  margin-bottom: 8px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content strong{
  font-size: 24px;
  line-height: 32px;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content .price-left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.container-fluid .wrapper .payment-btn .left-btn .inner-left-content .price-left svg{
  margin-left: 4px;
}


.container-fluid .wrapper .payment-btn .right-btn{
  background-color: #FAFDFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
  display: inline-flex;
  padding: 20px 24px;
  margin-left: 10px;
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
select{
  width: 96px;
  border-radius: 4px;
  color: #8B90A0;
  background: #FFFFFF;
  padding: 12px 16px;
  border: none;
  appearance: none;
}
select:focus{
  outline: none;
}
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
