import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  en: {
    translation: {
      // HomePage
      "Your Meal Plan": "Your Meal Plan",
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

      // Browse
      "Browse Recipes": "Browse Recipes", 
      "Results": "Results", 
      "Lacto-Ovo": "Lacto-Ovo", 
      "Lacto": "Lacto",
      "Ovo": "Ovo",
      "Vegan": "Vegan",
      "Vegetarian": "Vegetarian",
      "Pescatarian": "Pescatarian",
      "Search By:": "Search By:",
      "All": 'All',
      "Name": 'Name',
      "User": 'User',
      "Tag": 'Tag', 
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

      // IngredientCardLarge
      "Ingredient Info": "Ingredient Info",
      "Coupang/MarketCurly Link": "Coupang/MarketCurly Link",

      // ProcedureCardLarge
      "(Recipe Step 2 Long)": 'Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.',

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
      "(Recipe Step 2)": 'Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.',
      
      // AddMealPage2
      "Back": "Back",
      "(Error Message 1)": "We're having trouble finding some ingredients.",
      "(Error Message 2)": "Please add all ingredient links.",
      "Estimated Budget": "Estimated Budget",
      "Nutrient Information": "Nutrient Information",
      "Tags (Optional)": "Tags (Optional)",
      "Add Tag" : "Add Tag",
      "Found": "Found",
      "Publish Recipe": "Publish Recipe",
      "Publish Yes": "Yes",
      "Publish No": "No",
      ////////
      "Chicken": "Chicken",
      "SomeOtherTag": "SomeOtherTag",

      // AddIngredient
      "Add/Edit Ingredient": "Add/Edit Ingredient",
      "Quick Search": "Quick Search",
      "Coupang": "Coupang", 
      "Curly": "Curly",
      "(Quick Search Error)": "We're having trouble finding this ingredient.",
      "Manual Add/Edit": "Manual Add/Edit",
      "Image": "Image",
      "Add Image": "Add Image",
      "Change Image": "Change Image",
      "Save": "Save",
      ////////
      "ex. Canned Tuna": "ex. Canned Tuna", 
      "(Quick Result 1)": "Result 1 Long Name",
      "(Quick Result 2)": "Result 2",
    }
  },
  ko: {
    translation: {
      // HomePage
      "Your Meal Plan": "식단 계획표",
      "Suggested Meals": "추천 음식",
      "Your Meal Plan has:": "식단 영양성분",
      "Breakfast": "아침",
      "Lunch": "점심", 
      "Dinner": "저녁",
      "Cal": "칼로리", 
      "Protein": "프로틴", 
      "Carbs": "탄수화물",
      ////////
      "Waffles": "와플", 
      "Tuna Sandwich": "참치 샌드위치", 
      "Chili Hot Dog": "칠리 핫도그", 
      "Apple Pie": "애플 파이",

      // Browse
      "Browse Recipes": "레시피 찾기",
      "Results": "검색 결과",
      "Lacto-Ovo": "락토-오보", 
      "Lacto": "락토",
      "Ovo": "오보",
      "Vegan": "비건",
      "Vegetarian": "채식주의",
      "Pescatarian": "페스카테리어니즘",
      "Search By:": "검색옵션:",
      "All": '전체',
      "Name": '이름',
      "User": '유저',
      "Tag": '태그', 
      ////////
      "ex. Neapolitan Pizza": "ex. 네오폴리탄 피자",
      "Sandwich": "샌드위치", 
      "Healthy": "건강식",

      // RecipePage
      "Recipe Info": "레시피 정보",
      "Recipe Name": "이름",
      "Ingredients - None Listed": "재료 - 없음",
      "Ingredients": "재료",
      "Procedure - None Listed": "요리방식 - 없음", 
      "Procedure": "요리방식",
      "Step": "단계",
      "Add Meal": "레시피 추가",

      // IngredientCardLarge
      "Ingredient Info": "재료 정보",
      "Coupang/MarketCurly Link": "쿠팡/마켓컬리 주소",

      // ProcedureCardLarge
      "(Recipe Step 2 Long)": "잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다. 잘 섞은 후에 파프리카로 간을 맞추고, 차가워질 때 까지 냉장고에 보관한다. 내용물을 빵 두조각에 골고루 바른 후에 다른 빵 두조각을 덮는다.",

      // AddMealPage
      "Add Your Meal": "음식 추가",
      "Choose a Recipe": "레시피 고르기",
      "Ingredients": "재료",
      "Add Ingredient": "재료 추가",
      "Recipe Name": "음식 이름", 
      "Ingredient Name": "재료 이름",
      "Amount": "용량",
      "Procedure (Optional)": "요리방식 (선택)",
      "Add Step": "단계 추가",
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
      "(Error Message 1)": "쿠팡/컬리에서 몇가지 재료를 못 찾고 있습니다.",
      "(Error Message 2)": "재료 쿠팡/컬리 링크를 전부 추가해주세요.",
      "Estimated Budget": "예상 비용",
      "Nutrient Information": "레시피 영양성분",
      "Tags (Optional)": "태그 (선택)",
      "Add Tag" : "태그 추가",
      "Found": "추천",
      "Publish Recipe": "레시피 공유",
      "Publish Yes": "공유하기",
      "Publish No": "공유안하기",
      ////////
      "Chicken": "치킨",
      "SomeOtherTag": "어쩌고저쩌고",
      
      // AddIngredient
      "Add/Edit Ingredient": "재료 추가/수정",
      "Quick Search": "간편 검색", 
      "Coupang": "쿠팡", 
      "Curly": "컬리",
      "(Quick Search Error)": "재료를 못 찾겠습니다.",
      "Manual Add/Edit": "직접 추가하기",
      "Image": "사진",
      "Add Image": "사진 올리기",
      "Change Image": "사진 바꾸기",
      "Save": "저장",
      ////////
      "ex. Canned Tuna": "ex. 참치 통조림", 
      "(Quick Result 1)": "참치 통조림 12팩 긴 이름",
      "(Quick Result 2)": "참치 통조림",
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
      callback('en'); // 디폴트 언어 설정
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
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
