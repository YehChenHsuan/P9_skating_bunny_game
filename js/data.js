/**
 * ALICE ESL Phonics P9 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 02 - 12
 * 主題：Places Around Town, Vehicles & Special Sounds
 */

const P9_VOCABULARY = [
  {
    "id": "August",
    "word": "August",
    "zh": "August",
    "image": "P9_flashcards_images/P9_August.webp",
    "audioEn": "P9_flashcards_audios/P9_August.mp3",
    "audioZh": "P9_flashcards_audios/P9_August_zh.mp3"
  },
  {
    "id": "Lisa",
    "word": "Lisa",
    "zh": "Lisa",
    "image": "P9_flashcards_images/P9_Lisa.webp",
    "audioEn": "P9_flashcards_audios/P9_Lisa.mp3",
    "audioZh": "P9_flashcards_audios/P9_Lisa_zh.mp3"
  },
  {
    "id": "airplane",
    "word": "airplane",
    "zh": "airplane",
    "image": "P9_flashcards_images/P9_airplane.webp",
    "audioEn": "P9_flashcards_audios/P9_airplane.mp3",
    "audioZh": "P9_flashcards_audios/P9_airplane_zh.mp3"
  },
  {
    "id": "airport",
    "word": "airport",
    "zh": "airport",
    "image": "P9_flashcards_images/P9_airport.webp",
    "audioEn": "P9_flashcards_audios/P9_airport.mp3",
    "audioZh": "P9_flashcards_audios/P9_airport_zh.mp3"
  },
  {
    "id": "alphabet",
    "word": "alphabet",
    "zh": "alphabet",
    "image": "P9_flashcards_images/P9_alphabet.webp",
    "audioEn": "P9_flashcards_audios/P9_alphabet.mp3",
    "audioZh": "P9_flashcards_audios/P9_alphabet_zh.mp3"
  },
  {
    "id": "ambulance",
    "word": "ambulance",
    "zh": "ambulance",
    "image": "P9_flashcards_images/P9_ambulance.webp",
    "audioEn": "P9_flashcards_audios/P9_ambulance.mp3",
    "audioZh": "P9_flashcards_audios/P9_ambulance_zh.mp3"
  },
  {
    "id": "angel",
    "word": "angel",
    "zh": "angel",
    "image": "P9_flashcards_images/P9_angel.webp",
    "audioEn": "P9_flashcards_audios/P9_angel.mp3",
    "audioZh": "P9_flashcards_audios/P9_angel_zh.mp3"
  },
  {
    "id": "autumn",
    "word": "autumn",
    "zh": "autumn",
    "image": "P9_flashcards_images/P9_autumn.webp",
    "audioEn": "P9_flashcards_audios/P9_autumn.mp3",
    "audioZh": "P9_flashcards_audios/P9_autumn_zh.mp3"
  },
  {
    "id": "bank",
    "word": "bank",
    "zh": "bank",
    "image": "P9_flashcards_images/P9_bank.webp",
    "audioEn": "P9_flashcards_audios/P9_bank.mp3",
    "audioZh": "P9_flashcards_audios/P9_bank_zh.mp3"
  },
  {
    "id": "bright",
    "word": "bright",
    "zh": "bright",
    "image": "P9_flashcards_images/P9_bright.webp",
    "audioEn": "P9_flashcards_audios/P9_bright.mp3",
    "audioZh": "P9_flashcards_audios/P9_bright_zh.mp3"
  },
  {
    "id": "bus",
    "word": "bus",
    "zh": "bus",
    "image": "P9_flashcards_images/P9_bus.webp",
    "audioEn": "P9_flashcards_audios/P9_bus.mp3",
    "audioZh": "P9_flashcards_audios/P9_bus_zh.mp3"
  },
  {
    "id": "busy",
    "word": "busy",
    "zh": "busy",
    "image": "P9_flashcards_images/P9_busy.webp",
    "audioEn": "P9_flashcards_audios/P9_busy.mp3",
    "audioZh": "P9_flashcards_audios/P9_busy_zh.mp3"
  },
  {
    "id": "buy",
    "word": "buy",
    "zh": "buy",
    "image": "P9_flashcards_images/P9_buy.webp",
    "audioEn": "P9_flashcards_audios/P9_buy.mp3",
    "audioZh": "P9_flashcards_audios/P9_buy_zh.mp3"
  },
  {
    "id": "caution",
    "word": "caution",
    "zh": "caution",
    "image": "P9_flashcards_images/P9_caution.webp",
    "audioEn": "P9_flashcards_audios/P9_caution.mp3",
    "audioZh": "P9_flashcards_audios/P9_caution_zh.mp3"
  },
  {
    "id": "church",
    "word": "church",
    "zh": "church",
    "image": "P9_flashcards_images/P9_church.webp",
    "audioEn": "P9_flashcards_audios/P9_church.mp3",
    "audioZh": "P9_flashcards_audios/P9_church_zh.mp3"
  },
  {
    "id": "cough",
    "word": "cough",
    "zh": "cough",
    "image": "P9_flashcards_images/P9_cough.webp",
    "audioEn": "P9_flashcards_audios/P9_cough.mp3",
    "audioZh": "P9_flashcards_audios/P9_cough_zh.mp3"
  },
  {
    "id": "craw",
    "word": "craw",
    "zh": "craw",
    "image": "P9_flashcards_images/P9_craw.webp",
    "audioEn": "P9_flashcards_audios/P9_craw.mp3",
    "audioZh": "P9_flashcards_audios/P9_craw_zh.mp3"
  },
  {
    "id": "danger",
    "word": "danger",
    "zh": "danger",
    "image": "P9_flashcards_images/P9_danger.webp",
    "audioEn": "P9_flashcards_audios/P9_danger.mp3",
    "audioZh": "P9_flashcards_audios/P9_danger_zh.mp3"
  },
  {
    "id": "dough",
    "word": "dough",
    "zh": "dough",
    "image": "P9_flashcards_images/P9_dough.webp",
    "audioEn": "P9_flashcards_audios/P9_dough.mp3",
    "audioZh": "P9_flashcards_audios/P9_dough_zh.mp3"
  },
  {
    "id": "draw",
    "word": "draw",
    "zh": "draw",
    "image": "P9_flashcards_images/P9_draw.webp",
    "audioEn": "P9_flashcards_audios/P9_draw.mp3",
    "audioZh": "P9_flashcards_audios/P9_draw_zh.mp3"
  },
  {
    "id": "elephant",
    "word": "elephant",
    "zh": "elephant",
    "image": "P9_flashcards_images/P9_elephant.webp",
    "audioEn": "P9_flashcards_audios/P9_elephant.mp3",
    "audioZh": "P9_flashcards_audios/P9_elephant_zh.mp3"
  },
  {
    "id": "enough",
    "word": "enough",
    "zh": "enough",
    "image": "P9_flashcards_images/P9_enough.webp",
    "audioEn": "P9_flashcards_audios/P9_enough.mp3",
    "audioZh": "P9_flashcards_audios/P9_enough_zh.mp3"
  },
  {
    "id": "father",
    "word": "father",
    "zh": "father",
    "image": "P9_flashcards_images/P9_father.webp",
    "audioEn": "P9_flashcards_audios/P9_father.mp3",
    "audioZh": "P9_flashcards_audios/P9_father_zh.mp3"
  },
  {
    "id": "fight",
    "word": "fight",
    "zh": "fight",
    "image": "P9_flashcards_images/P9_fight.webp",
    "audioEn": "P9_flashcards_audios/P9_fight.mp3",
    "audioZh": "P9_flashcards_audios/P9_fight_zh.mp3"
  },
  {
    "id": "fire truck",
    "word": "fire truck",
    "zh": "fire truck",
    "image": "P9_flashcards_images/P9_fire truck.webp",
    "audioEn": "P9_flashcards_audios/P9_fire truck.mp3",
    "audioZh": "P9_flashcards_audios/P9_fire truck_zh.mp3"
  },
  {
    "id": "game",
    "word": "game",
    "zh": "game",
    "image": "P9_flashcards_images/P9_game.webp",
    "audioEn": "P9_flashcards_audios/P9_game.mp3",
    "audioZh": "P9_flashcards_audios/P9_game_zh.mp3"
  },
  {
    "id": "gas",
    "word": "gas",
    "zh": "gas",
    "image": "P9_flashcards_images/P9_gas.webp",
    "audioEn": "P9_flashcards_audios/P9_gas.mp3",
    "audioZh": "P9_flashcards_audios/P9_gas_zh.mp3"
  },
  {
    "id": "gate",
    "word": "gate",
    "zh": "gate",
    "image": "P9_flashcards_images/P9_gate.webp",
    "audioEn": "P9_flashcards_audios/P9_gate.mp3",
    "audioZh": "P9_flashcards_audios/P9_gate_zh.mp3"
  },
  {
    "id": "gel",
    "word": "gel",
    "zh": "gel",
    "image": "P9_flashcards_images/P9_gel.webp",
    "audioEn": "P9_flashcards_audios/P9_gel.mp3",
    "audioZh": "P9_flashcards_audios/P9_gel_zh.mp3"
  },
  {
    "id": "giant",
    "word": "giant",
    "zh": "giant",
    "image": "P9_flashcards_images/P9_giant.webp",
    "audioEn": "P9_flashcards_audios/P9_giant.mp3",
    "audioZh": "P9_flashcards_audios/P9_giant_zh.mp3"
  },
  {
    "id": "go",
    "word": "go",
    "zh": "go",
    "image": "P9_flashcards_images/P9_go.webp",
    "audioEn": "P9_flashcards_audios/P9_go.mp3",
    "audioZh": "P9_flashcards_audios/P9_go_zh.mp3"
  },
  {
    "id": "goat",
    "word": "goat",
    "zh": "goat",
    "image": "P9_flashcards_images/P9_goat.webp",
    "audioEn": "P9_flashcards_audios/P9_goat.mp3",
    "audioZh": "P9_flashcards_audios/P9_goat_zh.mp3"
  },
  {
    "id": "gold",
    "word": "gold",
    "zh": "gold",
    "image": "P9_flashcards_images/P9_gold.webp",
    "audioEn": "P9_flashcards_audios/P9_gold.mp3",
    "audioZh": "P9_flashcards_audios/P9_gold_zh.mp3"
  },
  {
    "id": "graph",
    "word": "graph",
    "zh": "graph",
    "image": "P9_flashcards_images/P9_graph.webp",
    "audioEn": "P9_flashcards_audios/P9_graph.mp3",
    "audioZh": "P9_flashcards_audios/P9_graph_zh.mp3"
  },
  {
    "id": "grocery",
    "word": "grocery",
    "zh": "grocery",
    "image": "P9_flashcards_images/P9_grocery.webp",
    "audioEn": "P9_flashcards_audios/P9_grocery.mp3",
    "audioZh": "P9_flashcards_audios/P9_grocery_zh.mp3"
  },
  {
    "id": "gum",
    "word": "gum",
    "zh": "gum",
    "image": "P9_flashcards_images/P9_gum.webp",
    "audioEn": "P9_flashcards_audios/P9_gum.mp3",
    "audioZh": "P9_flashcards_audios/P9_gum_zh.mp3"
  },
  {
    "id": "gym",
    "word": "gym",
    "zh": "gym",
    "image": "P9_flashcards_images/P9_gym.webp",
    "audioEn": "P9_flashcards_audios/P9_gym.mp3",
    "audioZh": "P9_flashcards_audios/P9_gym_zh.mp3"
  },
  {
    "id": "helicopter",
    "word": "helicopter",
    "zh": "helicopter",
    "image": "P9_flashcards_images/P9_helicopter.webp",
    "audioEn": "P9_flashcards_audios/P9_helicopter.mp3",
    "audioZh": "P9_flashcards_audios/P9_helicopter_zh.mp3"
  },
  {
    "id": "hospital",
    "word": "hospital",
    "zh": "hospital",
    "image": "P9_flashcards_images/P9_hospital.webp",
    "audioEn": "P9_flashcards_audios/P9_hospital.mp3",
    "audioZh": "P9_flashcards_audios/P9_hospital_zh.mp3"
  },
  {
    "id": "island",
    "word": "island",
    "zh": "island",
    "image": "P9_flashcards_images/P9_island.webp",
    "audioEn": "P9_flashcards_audios/P9_island.mp3",
    "audioZh": "P9_flashcards_audios/P9_island_zh.mp3"
  },
  {
    "id": "knight",
    "word": "knight",
    "zh": "knight",
    "image": "P9_flashcards_images/P9_knight.webp",
    "audioEn": "P9_flashcards_audios/P9_knight.mp3",
    "audioZh": "P9_flashcards_audios/P9_knight_zh.mp3"
  },
  {
    "id": "laugh",
    "word": "laugh",
    "zh": "laugh",
    "image": "P9_flashcards_images/P9_laugh.webp",
    "audioEn": "P9_flashcards_audios/P9_laugh.mp3",
    "audioZh": "P9_flashcards_audios/P9_laugh_zh.mp3"
  },
  {
    "id": "law",
    "word": "law",
    "zh": "law",
    "image": "P9_flashcards_images/P9_law.webp",
    "audioEn": "P9_flashcards_audios/P9_law.mp3",
    "audioZh": "P9_flashcards_audios/P9_law_zh.mp3"
  },
  {
    "id": "library",
    "word": "library",
    "zh": "library",
    "image": "P9_flashcards_images/P9_library.webp",
    "audioEn": "P9_flashcards_audios/P9_library.mp3",
    "audioZh": "P9_flashcards_audios/P9_library_zh.mp3"
  },
  {
    "id": "light",
    "word": "light",
    "zh": "light",
    "image": "P9_flashcards_images/P9_light.webp",
    "audioEn": "P9_flashcards_audios/P9_light.mp3",
    "audioZh": "P9_flashcards_audios/P9_light_zh.mp3"
  },
  {
    "id": "mall",
    "word": "mall",
    "zh": "mall",
    "image": "P9_flashcards_images/P9_mall.webp",
    "audioEn": "P9_flashcards_audios/P9_mall.mp3",
    "audioZh": "P9_flashcards_audios/P9_mall_zh.mp3"
  },
  {
    "id": "mother",
    "word": "mother",
    "zh": "mother",
    "image": "P9_flashcards_images/P9_mother.webp",
    "audioEn": "P9_flashcards_audios/P9_mother.mp3",
    "audioZh": "P9_flashcards_audios/P9_mother_zh.mp3"
  },
  {
    "id": "night",
    "word": "night",
    "zh": "night",
    "image": "P9_flashcards_images/P9_night.webp",
    "audioEn": "P9_flashcards_audios/P9_night.mp3",
    "audioZh": "P9_flashcards_audios/P9_night_zh.mp3"
  },
  {
    "id": "orange",
    "word": "orange",
    "zh": "orange",
    "image": "P9_flashcards_images/P9_orange.webp",
    "audioEn": "P9_flashcards_audios/P9_orange.mp3",
    "audioZh": "P9_flashcards_audios/P9_orange_zh.mp3"
  },
  {
    "id": "park",
    "word": "park",
    "zh": "park",
    "image": "P9_flashcards_images/P9_park.webp",
    "audioEn": "P9_flashcards_audios/P9_park.mp3",
    "audioZh": "P9_flashcards_audios/P9_park_zh.mp3"
  },
  {
    "id": "pause",
    "word": "pause",
    "zh": "pause",
    "image": "P9_flashcards_images/P9_pause.webp",
    "audioEn": "P9_flashcards_audios/P9_pause.mp3",
    "audioZh": "P9_flashcards_audios/P9_pause_zh.mp3"
  },
  {
    "id": "people",
    "word": "people",
    "zh": "people",
    "image": "P9_flashcards_images/P9_people.webp",
    "audioEn": "P9_flashcards_audios/P9_people.mp3",
    "audioZh": "P9_flashcards_audios/P9_people_zh.mp3"
  },
  {
    "id": "pharmacy",
    "word": "pharmacy",
    "zh": "pharmacy",
    "image": "P9_flashcards_images/P9_pharmacy.webp",
    "audioEn": "P9_flashcards_audios/P9_pharmacy.mp3",
    "audioZh": "P9_flashcards_audios/P9_pharmacy_zh.mp3"
  },
  {
    "id": "phone",
    "word": "phone",
    "zh": "phone",
    "image": "P9_flashcards_images/P9_phone.webp",
    "audioEn": "P9_flashcards_audios/P9_phone.mp3",
    "audioZh": "P9_flashcards_audios/P9_phone_zh.mp3"
  },
  {
    "id": "photo",
    "word": "photo",
    "zh": "photo",
    "image": "P9_flashcards_images/P9_photo.webp",
    "audioEn": "P9_flashcards_audios/P9_photo.mp3",
    "audioZh": "P9_flashcards_audios/P9_photo_zh.mp3"
  },
  {
    "id": "police car",
    "word": "police car",
    "zh": "police car",
    "image": "P9_flashcards_images/P9_police car.webp",
    "audioEn": "P9_flashcards_audios/P9_police car.mp3",
    "audioZh": "P9_flashcards_audios/P9_police car_zh.mp3"
  },
  {
    "id": "police",
    "word": "police",
    "zh": "police",
    "image": "P9_flashcards_images/P9_police.webp",
    "audioEn": "P9_flashcards_audios/P9_police.mp3",
    "audioZh": "P9_flashcards_audios/P9_police_zh.mp3"
  },
  {
    "id": "restaurant",
    "word": "restaurant",
    "zh": "restaurant",
    "image": "P9_flashcards_images/P9_restaurant.webp",
    "audioEn": "P9_flashcards_audios/P9_restaurant.mp3",
    "audioZh": "P9_flashcards_audios/P9_restaurant_zh.mp3"
  },
  {
    "id": "rough",
    "word": "rough",
    "zh": "rough",
    "image": "P9_flashcards_images/P9_rough.webp",
    "audioEn": "P9_flashcards_audios/P9_rough.mp3",
    "audioZh": "P9_flashcards_audios/P9_rough_zh.mp3"
  },
  {
    "id": "sauce",
    "word": "sauce",
    "zh": "sauce",
    "image": "P9_flashcards_images/P9_sauce.webp",
    "audioEn": "P9_flashcards_audios/P9_sauce.mp3",
    "audioZh": "P9_flashcards_audios/P9_sauce_zh.mp3"
  },
  {
    "id": "saucer",
    "word": "saucer",
    "zh": "saucer",
    "image": "P9_flashcards_images/P9_saucer.webp",
    "audioEn": "P9_flashcards_audios/P9_saucer.mp3",
    "audioZh": "P9_flashcards_audios/P9_saucer_zh.mp3"
  },
  {
    "id": "saw",
    "word": "saw",
    "zh": "saw",
    "image": "P9_flashcards_images/P9_saw.webp",
    "audioEn": "P9_flashcards_audios/P9_saw.mp3",
    "audioZh": "P9_flashcards_audios/P9_saw_zh.mp3"
  },
  {
    "id": "school",
    "word": "school",
    "zh": "school",
    "image": "P9_flashcards_images/P9_school.webp",
    "audioEn": "P9_flashcards_audios/P9_school.mp3",
    "audioZh": "P9_flashcards_audios/P9_school_zh.mp3"
  },
  {
    "id": "see",
    "word": "see",
    "zh": "see",
    "image": "P9_flashcards_images/P9_see.webp",
    "audioEn": "P9_flashcards_audios/P9_see.mp3",
    "audioZh": "P9_flashcards_audios/P9_see_zh.mp3"
  },
  {
    "id": "seesaw",
    "word": "seesaw",
    "zh": "seesaw",
    "image": "P9_flashcards_images/P9_seesaw.webp",
    "audioEn": "P9_flashcards_audios/P9_seesaw.mp3",
    "audioZh": "P9_flashcards_audios/P9_seesaw_zh.mp3"
  },
  {
    "id": "sigh",
    "word": "sigh",
    "zh": "sigh",
    "image": "P9_flashcards_images/P9_sigh.webp",
    "audioEn": "P9_flashcards_audios/P9_sigh.mp3",
    "audioZh": "P9_flashcards_audios/P9_sigh_zh.mp3"
  },
  {
    "id": "sign",
    "word": "sign",
    "zh": "sign",
    "image": "P9_flashcards_images/P9_sign.webp",
    "audioEn": "P9_flashcards_audios/P9_sign.mp3",
    "audioZh": "P9_flashcards_audios/P9_sign_zh.mp3"
  },
  {
    "id": "straw",
    "word": "straw",
    "zh": "straw",
    "image": "P9_flashcards_images/P9_straw.webp",
    "audioEn": "P9_flashcards_audios/P9_straw.mp3",
    "audioZh": "P9_flashcards_audios/P9_straw_zh.mp3"
  },
  {
    "id": "supermarket",
    "word": "supermarket",
    "zh": "supermarket",
    "image": "P9_flashcards_images/P9_supermarket.webp",
    "audioEn": "P9_flashcards_audios/P9_supermarket.mp3",
    "audioZh": "P9_flashcards_audios/P9_supermarket_zh.mp3"
  },
  {
    "id": "swallow",
    "word": "swallow",
    "zh": "swallow",
    "image": "P9_flashcards_images/P9_swallow.webp",
    "audioEn": "P9_flashcards_audios/P9_swallow.mp3",
    "audioZh": "P9_flashcards_audios/P9_swallow_zh.mp3"
  },
  {
    "id": "swamp",
    "word": "swamp",
    "zh": "swamp",
    "image": "P9_flashcards_images/P9_swamp.webp",
    "audioEn": "P9_flashcards_audios/P9_swamp.mp3",
    "audioZh": "P9_flashcards_audios/P9_swamp_zh.mp3"
  },
  {
    "id": "swan",
    "word": "swan",
    "zh": "swan",
    "image": "P9_flashcards_images/P9_swan.webp",
    "audioEn": "P9_flashcards_audios/P9_swan.mp3",
    "audioZh": "P9_flashcards_audios/P9_swan_zh.mp3"
  },
  {
    "id": "taxi",
    "word": "taxi",
    "zh": "taxi",
    "image": "P9_flashcards_images/P9_taxi.webp",
    "audioEn": "P9_flashcards_audios/P9_taxi.mp3",
    "audioZh": "P9_flashcards_audios/P9_taxi_zh.mp3"
  },
  {
    "id": "through",
    "word": "through",
    "zh": "through",
    "image": "P9_flashcards_images/P9_through.webp",
    "audioEn": "P9_flashcards_audios/P9_through.mp3",
    "audioZh": "P9_flashcards_audios/P9_through_zh.mp3"
  },
  {
    "id": "tow truck",
    "word": "tow truck",
    "zh": "tow truck",
    "image": "P9_flashcards_images/P9_tow truck.webp",
    "audioEn": "P9_flashcards_audios/P9_tow truck.mp3",
    "audioZh": "P9_flashcards_audios/P9_tow truck_zh.mp3"
  },
  {
    "id": "town",
    "word": "town",
    "zh": "town",
    "image": "P9_flashcards_images/P9_town.webp",
    "audioEn": "P9_flashcards_audios/P9_town.mp3",
    "audioZh": "P9_flashcards_audios/P9_town_zh.mp3"
  },
  {
    "id": "walk",
    "word": "walk",
    "zh": "walk",
    "image": "P9_flashcards_images/P9_walk.webp",
    "audioEn": "P9_flashcards_audios/P9_walk.mp3",
    "audioZh": "P9_flashcards_audios/P9_walk_zh.mp3"
  },
  {
    "id": "wallet",
    "word": "wallet",
    "zh": "wallet",
    "image": "P9_flashcards_images/P9_wallet.webp",
    "audioEn": "P9_flashcards_audios/P9_wallet.mp3",
    "audioZh": "P9_flashcards_audios/P9_wallet_zh.mp3"
  },
  {
    "id": "want",
    "word": "want",
    "zh": "want",
    "image": "P9_flashcards_images/P9_want.webp",
    "audioEn": "P9_flashcards_audios/P9_want.mp3",
    "audioZh": "P9_flashcards_audios/P9_want_zh.mp3"
  },
  {
    "id": "wash",
    "word": "wash",
    "zh": "wash",
    "image": "P9_flashcards_images/P9_wash.webp",
    "audioEn": "P9_flashcards_audios/P9_wash.mp3",
    "audioZh": "P9_flashcards_audios/P9_wash_zh.mp3"
  },
  {
    "id": "women",
    "word": "women",
    "zh": "women",
    "image": "P9_flashcards_images/P9_women.webp",
    "audioEn": "P9_flashcards_audios/P9_women.mp3",
    "audioZh": "P9_flashcards_audios/P9_women_zh.mp3"
  },
  {
    "id": "zoo",
    "word": "zoo",
    "zh": "zoo",
    "image": "P9_flashcards_images/P9_zoo.webp",
    "audioEn": "P9_flashcards_audios/P9_zoo.mp3",
    "audioZh": "P9_flashcards_audios/P9_zoo_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 02 - 12）
const PHONICS_GROUPS = {
  "aw/au": [
    "autumn",
    "August",
    "craw",
    "draw",
    "laugh",
    "pause",
    "sauce",
    "saw",
    "straw"
  ],
  "wa": [
    "walk",
    "wallet",
    "want",
    "wash",
    "swallow",
    "swan",
    "swamp"
  ],
  "gh/ph": [
    "cough",
    "enough",
    "rough",
    "laugh",
    "elephant",
    "graph",
    "pharmacy",
    "phone",
    "photo"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "subject": "Doctor",
    "action": "help",
    "sentence": "The doctor helps people at the hospital.",
    "question": "Where is the doctor?",
    "options": [
      "hospital",
      "park",
      "airport"
    ],
    "correct": "hospital"
  },
  {
    "subject": "Student",
    "action": "read",
    "sentence": "I read good books at the library.",
    "question": "Where can we read books?",
    "options": [
      "library",
      "bank",
      "grocery"
    ],
    "correct": "library"
  },
  {
    "subject": "Boy",
    "action": "buy",
    "sentence": "He can buy fresh milk at the supermarket.",
    "question": "Where can he buy milk?",
    "options": [
      "supermarket",
      "zoo",
      "school"
    ],
    "correct": "supermarket"
  },
  {
    "subject": "Family",
    "action": "visit",
    "sentence": "We can see giant giraffes at the zoo.",
    "question": "Where can we see animals?",
    "options": [
      "zoo",
      "pharmacy",
      "church"
    ],
    "correct": "zoo"
  },
  {
    "subject": "Police",
    "action": "drive",
    "sentence": "The police officer can drive the police car.",
    "question": "What does the officer drive?",
    "options": [
      "police car",
      "taxi",
      "ambulance"
    ],
    "correct": "police car"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P9_VOCABULARY;
  window.P9_VOCABULARY = P9_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P9_VOCABULARY,
    P9_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
