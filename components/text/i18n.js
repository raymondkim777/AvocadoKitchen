import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  en: {
    translation: {
      // SideBar
      "Home": "Home",
      "My Meals": "My Meals",
      "My Cart": "My Cart",
      "Recipe Search": "Recipe Search",
      "Add a Meal": "Add a Meal",
      "Info": "Info",
      "Profile": "Profile",
      "Tutorial": "Tutorial",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",

      // LeaveAlert
      "AlertTitle": "Do you want to leave?",
      "AlertMessage": "All unsaved changes will be lost.",
      "Cancel": "Cancel",
      "Leave": "Leave",

      // Login / SignUp
      "Enter your email": "Enter your email",
      "Enter a username": "Enter a username",
      "Enter your password": "Enter your password",
      "Enter your password again": "Enter your password again",
      "Continue with Google": "Continue with Google",
      "Login": "Login",
      "Sign Up": "Sign Up",
      "Coupang Account": "Coupang Account",
      "Market Kurly Account": "Market Kurly Account", 
      "Back": "Back", 
      "Next": "Next",

      // SignUp2_2
      "Diet Restrictions": "Diet Restrictions",
      "Select your diet": "Select your diet",
      "Specific (Optional)": "Specific (Optional)",
      "Allergies (Optional)": "Allergies (Optional)",
      "Per Meal": "Per Meal",
      "Daily": "Daily", 
      "Weekly": "Weekly",
      "Budget": "Budget",
      ////////
      "Peanut": "Peanut",
      "Kiwi": "Kiwi",
      "Peach": "Peach",
      "Gluten Free": "Gluten Free",

      // Profile
      "Profile": "Profile",
      "Logout": "Logout", 
      "Coupang/MarketCurly Accounts": "Coupang/MarketCurly Accounts",

      // UserInfoPage
      "Information": "Information",
      "Diet Category": "Diet Category",
      "Substances/Food to Avoid": "Food to Avoid",
      "Suggested Food": "Suggested Food",
      "Caution": "Caution",
      "(Legal Notice)": "This application is intended to serve as a general reference for diet restrictions and allergies. It is not a substitute for professional medical advice, diagnosis, or treatment. Please be aware that the app does not have access to individual users' personal health conditions. As such, it is the responsibility of each user to ensure that their diet meets their specific health needs.",
      ////////
      "Vegan": "Vegan",
      "Fried Chicken": "Fried Chicken",
      "Tofu": "Tofu",

      // HomePage
      "Your Meal Plan": "Your Meal Plan",
      "Su": "Su",
      "M": "M",
      "T": "T",
      "W": "W",
      "Th": "Th",
      "F": "F",
      "Sa": "Sa",
      "Suggested Meals": "Suggested Meals",
      "Your Meal Plan has:": "Your Meal Plan has:",
      "Breakfast": "Breakfast",
      "Lunch": "Lunch", 
      "Dinner": "Dinner",
      "Cal": "Cal", 
      "Protein": "Protein", 
      "Carbs": "Carbs",
      ///////
      "Waffles": "Waffles", 
      "Tuna Sandwich": "Tuna Sandwich", 
      "Chili Hot Dog": "Chili Hot Dog", 
      "Apple Pie": "Apple Pie",
      "Sirloin Steak": "Sirloin Steak",

      // My Meals
      "My Meals": "My Meals",
      "Average Daily Stats": "Average Daily Stats",
      "Sunday": "Sunday",
      "Monday": "Monday",
      "Tuesday": "Tuesday",
      "Wednesday": "Wednesday",
      "Thursday": "Thursday",
      "Friday": "Friday",
      "Saturday": "Saturday",
      "Edit": "Edit", 
      "Delete": "Delete",

      // My Cart
      "My Cart": "My Cart",
      "Reset Cart": "Reset Cart",
      "Coupang": "Coupang", 
      "Market Curly": "Market Curly",
      "Regular": "Regular",
      "Rocket": "Rocket", 
      "Dawn": "Dawn",
      "Total": "Total",
      "Change Item": "Change", 
      "Auto": "Auto",
      "Delete": "Delete",
      "Both Sites": "Both",
      "Coupang": "Coupang", 
      "Curly": "Curly",

      // Fridge
      "My Fridge": "My Fridge", 
      "Ingredient Search": "Ingredient Search",
      "EditDeleteCheckTitle": "Do you want to delete this item?",
      "EditDeleteCheckMessage": "This action cannot be reversed.",
      "Delete": "Delete",

      // Browse
      "Browse Recipes": "Browse Recipes", 
      "Results": "Results", 
      "Lacto-Ovo": "Lacto-Ovo", 
      "Lacto": "Lacto",
      "Ovo": "Ovo",
      "Vegan": "Vegan",
      "Vegetarian": "Vegetarian",
      "Pescatarian": "Pescatarian",
      "Calories": "Calories",
      "Budget": "Budget",
      "Search By:": "Search By:",
      "All": 'All',
      "Name": 'Name',
      "User": 'User',
      "Tag": 'Tag', 
      "Filter By": "Filter By",
      "Relevance": "Relevance",
      "Likes": "Likes",
      "Downloads": "Downloads",
      "Calories": "Calories",
      "Protein": "Protein",
      "Carbs": "Carbs",
      "Asc": "(Asc)",
      "Des": "(Des)",
      "Ascending": "Ascending",
      "Descending": "Descending",
      //////////
      "ex. Neapolitan Pizza": "ex. Neapolitan Pizza", 
      "Sandwich": "Sandwich", 
      "Healthy": "Healthy",

      // RecipePage
      "Recipe Info": "Recipe Info",
      "Recipe Name": "Name",
      "Ingredients - None Listed": "Ingredients - None Listed",
      "Ingredients": "Ingredients",
      "Procedure - None Listed": "Procedure - None Listed", 
      "Procedure": "Procedure",
      "Step": "Step",
      "Add Meal": "Add Meal",

      // Comment Modal
      "Comments": "Comments",
      "Load More": "Load More",
      "Add a comment...": "Add a comment...",
      "seconds ago": " seconds ago", 
      "minutes ago": " minutes ago",
      "hours ago": " hours ago",
      "days ago": " days ago",
      "weeks ago": " weeks ago",
      "months ago": " months ago",
      "years ago": " years ago",

      // IngredientCardLarge
      "Ingredient Info": "Ingredient Info",
      "Coupang/MarketCurly Link": "Coupang/MarketCurly Link",

      // ProcedureCardLarge
      //////////
      "(Recipe Step 2 Long)": 'Tap the tray several times to remove air bubbles. Allow to sit for 40-60 minutes so the macaron batter forms a skin. You should be able to touch the shell and feel a dry surface. Heat oven to 300F. Bake for 12-15 minutes. You’ll know they’re done if the macaron shells don’t wobble when you move them, but if they do then you may need to give them a bit more time in the oven if they are not done. Allow them to cool for about 10 minutes on the pan then transfer to a wire rack to cool completely. Pipe your filling onto the back of half the macaron shells. Form a sandwich and your french macarons are ready to enjoy!',

      // AddMealPage
      "Add Your Meal": "Add Your Meal",
      "Choose a Recipe": "Choose a Recipe",
      "Ingredients": "Ingredients",
      "Add Ingredient": "Add Ingredient",
      "Recipe Name": "Recipe Name", 
      "Ingredient Name": "Name",
      "Amount": "Amount",
      "Procedure (Optional)": "Procedure (Optional)",
      "Add Step": "Add Step",
      "Description": "Description",
      "Continue": "Continue",
      ////////
      "ex. Chicken Sandwich": "ex. Chicken Sandwich",
      "Canned Tuna": "Canned Tuna",
      "Celery": "Celery", 
      "Red Onion": "Red Onion",
      "Sweet Pickle Relish": "Sweet Pickle Relish",
      "Lemon": "Lemon", 
      "Garlic Clove": "Garlic Clove", 
      "Salt": "Salt", 
      "Black Pepper": "Black Pepper", 
      "Mayonnaise": "Mayonnaise",
      "(Recipe Step 1)": 'Combine tuna, mayonnaise, celery, onion, parsley, lemon juice, garlic powder, salt, and pepper in a large bowl.',
      "(Recipe Step 2)": 'Tap the tray several times to remove air bubbles. Allow to sit for 40-60 minutes so the macaron batter forms a skin. You should be able to touch the shell and feel a dry surface. Heat oven to 300F. Bake for 12-15 minutes. You’ll know they’re done if the macaron shells don’t wobble when you move them, but if they do then you may need to give them a bit more time in the oven if they are not done. Allow them to cool for about 10 minutes on the pan then transfer to a wire rack to cool completely. Pipe your filling onto the back of half the macaron shells. Form a sandwich and your french macarons are ready to enjoy!',
      
      // AddMealPage2
      "Back": "Back",
      "(Error Message 1)": "We're having trouble finding some ingredients.",
      "(Error Message 2)": "Please check all ingredient links.",
      "Estimated Budget": "Estimated Budget",
      "(Budget Notice)": "*Price range for selected ingredients from Coupang/Curly*",
      "Nutrient Information": "Nutrient Information",
      "Tags (Optional)": "Tags (Optional)",
      "Add Tag" : "Add Tag",
      "Found": "Found",
      "Publish Recipe": "Publish Recipe",
      "Publish Yes": "Yes",
      "Publish No": "No",
      "Finish": "Finish",
      ////////
      "Chicken": "Chicken",
      "SomeOtherTag": "SomeOtherTag",

      // AddIngredient
      "Add Ingredient": "Add Ingredient",
      "Edit Ingredient": "Edit Ingredient",
      "Order Ingredient": "Order Ingredient",
      "Order Yes": "Order Yes",
      "Order No": "Order No",
      "Quick Search": "Quick Search",
      "Quick Search Long": "Quich Search: Coupang/Curly",
      "Coupang": "Coupang", 
      "Curly": "Curly",
      "(Quick Search Error)": "We're having trouble finding this ingredient.",
      "Close Search": "Close",
      "Manual Add/Edit": "Manual Add/Edit",
      "Specific": "Specific", 
      "General": "General",
      "Image": "Image",
      "Add Image": "Add Image",
      "Change Image": "Change Image",
      "Delete Image": "Delete Image",
      "Link Invalid Message": "Please input a valid link",
      "SaveCheck Error Message": "Please input all fields",
      "Save": "Save",
      ////////
      "ex. Canned Tuna": "ex. Canned Tuna", 
      "(Quick Result 1)": "Result 1 Long Name",
      "(Quick Result 2)": "Result 2",

      // AddProcedure
      "Add Procedure Step": "Add Procedure Step",
      "Edit Procedure Step": "Edit Procedure Step",
      "Step": "Step",
      "Step Number": "Step Number",
      "Description": "Description", 
      "Insert procedure step here": "(Insert procedure step here)",

      // Tutorial
      "Tutorial": "Tutorial",
      "Edit Diet Settings": "Edit Diet Settings",
    }
  },
  ko: {
    translation: {
      // SideBar
      "Home": "홈",
      "My Meals": "내 식단",
      "My Cart": "내 장바구니",
      "Recipe Search": "레시피 검색",
      "Add a Meal": "음식 추가",
      "Info": "정보",
      "Profile": "설정",
      "Tutorial": "튜토리얼",
      "Privacy Policy": "개인정보처리방침",
      "Terms of Service": "어플이용약관",

      // LeaveAlert
      "AlertTitle": "이 페이지 나가고 싶으세요?",
      "AlertMessage": "나가기 선택하시면 모든 수정이 지워집니다.",
      "Cancel": "취소",
      "Leave": "나가기",

      // Login / SignUp
      "Enter your email": "이메일 입력",
      "Enter a username": "아이디 입력",
      "Enter your password": "비밀번호 입력",
      "Enter your password again": "비밀번호 확인",
      "Continue with Google": "Continue with Google",
      "Login": "로그인",
      "Sign Up": "회원가입",
      "Coupang Account": "쿠팡 계정",
      "Market Kurly Account": "마켓컬리 계정", 
      "Back": "뒤로가기", 
      "Next": "넘어가기",

      // SignUp2_2
      "Diet Restrictions": "식사 제한 사항",
      "Select your diet": "식단 추천 유형 선택",
      "Specific (Optional)": "추가 추천 옵션 (선택)",
      "Allergies (Optional)": "알러지 (선택)",
      "Per Meal": "한 끼",
      "Daily": "하루", 
      "Weekly": "한 주",
      "Budget": "예산",
      ////////
      "Peanut": "땅콩",
      "Kiwi": "키위",
      "Peach": "복숭아",
      "Gluten Free": "글루텐 프리",

      // Profile
      "Profile": "유저 설정",
      "Logout": "로그아웃", 
      "Coupang/MarketCurly Accounts": "쿠팡/마켓컬리 계정",

      // UserInfoPage
      "Information": "식단 정보",
      "Diet Category": "식단 분류",
      "Substances/Food to Avoid": "주의해야 할 재료/음식",
      "Suggested Food": "추천 음식",
      "Caution": "주의사항",
      "(Legal Notice)": "이 앱은 식단 제한 및 알레르기에 대한 일반적인 참고 자료로 개발되었습니다. 전문적인 의학적 소견, 진단 또는 처방을 대체하지 않습니다. 이 앱은 개별 사용자의 개인 건강 상태에 접근권한이 없습니다. 따라서 각 사용자는 자신의 식단이 자신의 상황에 맞게 충족 되었는지 확인해야 할 책임이 있습니다.",
      /////////
      "Vegan": "비건",
      "Fried Chicken": "치킨",
      "Tofu": "두부",

      // HomePage
      "Your Meal Plan": "식단 계획표",
      "Su": "일",
      "M": "월",
      "T": "화",
      "W": "수",
      "Th": "목",
      "F": "금",
      "Sa": "토",
      "Suggested Meals": "추천 음식",
      "Your Meal Plan has:": "식단 영양성분",
      "Breakfast": "아침",
      "Lunch": "점심", 
      "Dinner": "저녁",
      "Cal": "Cal", 
      "Protein": "프로틴", 
      "Carbs": "탄수화물",
      ////////
      "Waffles": "와플", 
      "Tuna Sandwich": "참치 샌드위치", 
      "Chili Hot Dog": "칠리 핫도그", 
      "Apple Pie": "애플 파이",
      "Sirloin Steak": "안심 스테이크",

      // My Meals
      "My Meals": "내 식단",
      "Average Daily Stats": "하루 당 영앙성분",
      "Sunday": "일요일",
      "Monday": "월요일",
      "Tuesday": "화요일",
      "Wednesday": "수요일",
      "Thursday": "목요일",
      "Friday": "금요일",
      "Saturday": "토요일",
      "Edit": "수정", 
      "Delete": "삭제",

      // My Cart
      "My Cart": "내 장바구니",
      "Reset Cart": "원상태 복귀",
      "Coupang": "쿠팡", 
      "Market Curly": "마켓컬리",
      "Regular": "일반배송",
      "Rocket": "로켓배송", 
      "Dawn": "샛별배송",
      "Total": "총가격",
      "Change Item": "링크 수정", 
      "Auto": "추천",
      "Delete": "재료 삭제",
      "Both Sites": "전체",
      "Coupang": "쿠팡", 
      "Curly": "컬리",

      // Fridge
      "My Fridge": "내 냉장고", 
      "Ingredient Search": "재료 검색",
      "EditDeleteCheckTitle": "이 재료 지우고 싶으세요?",
      "EditDeleteCheckMessage": "한번 지우면 다시 직접 추가해야합니다.",
      "Delete": "지우기",

      // Browse
      "Browse Recipes": "레시피 찾기",
      "Results": "결과",
      "Lacto-Ovo": "락토-오보", 
      "Lacto": "락토",
      "Ovo": "오보",
      "Vegan": "비건",
      "Vegetarian": "채식주의",
      "Pescatarian": "페스카테리어니즘",
      "Calories": "칼로리",
      "Budget": "비용",
      "Search By:": "검색옵션:",
      "All": '전체',
      "Name": '이름',
      "User": '유저',
      "Tag": '태그', 
      "Filter By": "정렬기준",
      "Relevance": "연관성",
      "Likes": "추천수",
      "Downloads": "다운로드",
      "Calories": "칼로리",
      "Protein": "프로틴",
      "Carbs": "탄수화물",
      "Asc": "오름",
      "Des": "내림",
      "Ascending": "오름차정렬",
      "Descending": "내림차정렬",
      ////////
      "ex. Neapolitan Pizza": "ex. 나폴리 피자",
      "Sandwich": "샌드위치", 
      "Healthy": "건강식",

      // RecipePage
      "Recipe Info": "레시피 정보",
      "Recipe Name": "요리 이름",
      "Ingredients - None Listed": "재료 - 없음",
      "Ingredients": "재료",
      "Procedure - None Listed": "조리법 - 없음", 
      "Procedure": "조리법",
      "Step": "Step",
      "Add Meal": "레시피 추가",

      // Comment Modal
      "Comments": "댓글",
      "Load More": "댓글 더 보기",
      "Add a comment...": "댓글 추가...",
      "seconds ago": "초 전", 
      "minutes ago": "분 전",
      "hours ago": "시간 전",
      "days ago": "일 전",
      "weeks ago": "주 전",
      "months ago": "달 전",
      "years ago": "년 전",

      // IngredientCardLarge
      "Ingredient Info": "재료 정보",
      "Coupang/MarketCurly Link": "쿠팡/마켓컬리 주소",

      // ProcedureCardLarge
      "(Recipe Step 2 Long)": "잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다.",

      // AddMealPage
      "Add Your Meal": "음식 추가",
      "Meal Time": "식사 시간",
      "Quick Meal Search": "간편 검색",
      "Choose a Recipe": "레시피 고르기",
      "Ingredients": "재료",
      "Add Ingredient": "재료 추가",
      "Recipe Name": "요리 이름", 
      "Ingredient Name": "재료 이름",
      "Amount": "용량",
      "Procedure (Optional)": "조리법 (선택)",
      "Add Step": "조리과정 추가",
      "Description": "설명",
      "Continue": "다음 페이지",
      ////////
      "ex. Chicken Sandwich": "ex. 치킨 샌드위치",
      "Canned Tuna": "참치 통조림",
      "Celery": "셀러리", 
      "Red Onion": "빨간양파",
      "Sweet Pickle Relish": "스위트 피클 랠리쉬",
      "Lemon": "레몬", 
      "Garlic Clove": "통마늘", 
      "Salt": "소금", 
      "Black Pepper": "후추", 
      "Mayonnaise": "마요네즈",
      "(Recipe Step 1)": "큰 그릇에 참치 통조림, 마요네즈, 셀러리, 양파, 파슬리, 레몬 주스, 마늘가루, 소금과 후추를 섞는다.",
      "(Recipe Step 2)": "잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다.",
      
      // AddMealPage2
      "Back": "뒤로가기",
      "(Error Message 1)": "쿠팡/컬리에서 몇가지 재료를 찾지 못하였습니다.",
      "(Error Message 2)": "재료 쿠팡/컬리 링크를 전부 확인해주세요.",
      "Estimated Budget": "예상 비용",
      "(Budget Notice)": "*주문할 재료들의 가격대, 쿠팡/컬리 기준*",
      "Nutrient Information": "레시피 영양성분",
      "Tags (Optional)": "태그 (선택)",
      "Add Tag" : "태그 추가",
      "Found": "추천",
      "Publish Recipe": "레시피 공유",
      "Publish Yes": "공유하기",
      "Publish No": "공유안하기",
      "Finish": "레시피 저장",
      ////////
      "Chicken": "치킨",
      "SomeOtherTag": "어쩌고저쩌고",
      
      // AddIngredient
      "Add Ingredient": "재료 추가",
      "Edit Ingredient": "재료 수정",
      "Order Ingredient": "재료 주문하기",
      "Order Yes": "주문하기",
      "Order No": "주문안하기",
      "Quick Search": "간편 검색", 
      "Quick Search Long": "간편 검색: 쿠팡/컬리",
      "Coupang": "쿠팡", 
      "Curly": "컬리",
      "(Quick Search Error)": "검색한 재료가 없습니다.",
      "Close Search": "검색 닫기",
      "Manual Add/Edit": "직접 추가하기",
      "Specific": "특정 단위", 
      "General": "일반 단위",
      "Image": "사진",
      "Add Image": "사진 올리기",
      "Change Image": "사진 변경",
      "Delete Image": "사진 삭제",
      "Link Invalid Message": "유효한 주소를 입력해주세요",
      "SaveCheck Error Message": "안채워진 정보가 있습니다",
      "Save": "저장",
      ////////
      "ex. Canned Tuna": "ex. 참치 통조림", 
      "(Quick Result 1)": "참치 통조림 12팩 긴 이름",
      "(Quick Result 2)": "참치 통조림",

      // Add Procedure
      "Add Procedure Step": "조리과정 추가",
      "Edit Procedure Step": "조리과정 수정",
      "Step": "Step",
      "Step Number": "레시피 순서",
      "Description": "설명", 
      "Insert procedure step here": "(조리법 단계 설명을 적으세요.)",

      // Tutorial
      "Tutorial": "튜토리얼",
      "Edit Diet Settings": "다이어트 설정 수정하기",
    }
  },
};

// 디바이스의 언어 설정 감지
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locales = RNLocalize.getLocales();
    if (locales && locales.length > 0) {
      callback(locales[0].languageTag);
    } else {
      callback('ko'); // 디폴트 언어 설정
    }
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector) // language detector 사용
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
