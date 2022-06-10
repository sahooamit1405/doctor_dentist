'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/chrome-device/Default/Affiliation%20Database": "b98d39750c983d65a9333b4d5ba6aa84",
".dart_tool/chrome-device/Default/Affiliation%20Database-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/BudgetDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/coupon_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/databases/Databases.db": "8d6fa57058c6bd585ae0b96c1f511ad1",
".dart_tool/chrome-device/Default/databases/Databases.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/data_reduction_proxy_leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/data_reduction_proxy_leveldb/CURRENT": "206702161f94c5cd39fadd03f4014d98",
".dart_tool/chrome-device/Default/data_reduction_proxy_leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/data_reduction_proxy_leveldb/LOG": "113ea094c4b01558a4540ec2cf005300",
".dart_tool/chrome-device/Default/data_reduction_proxy_leveldb/MANIFEST-000002": "22bf0e81636b1b45051b138f48b3d148",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Download%20Service/EntryDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Scripts/000003.log": "891a884b9fa2bff4519f5f56d2a25d62",
".dart_tool/chrome-device/Default/Extension%20Scripts/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20Scripts/LOG": "7c65420485e054b7011aa94b1a396959",
".dart_tool/chrome-device/Default/Extension%20Scripts/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Extension%20State/000003.log": "829a3c6987490c82e6ba954662c1d61b",
".dart_tool/chrome-device/Default/Extension%20State/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Extension%20State/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Extension%20State/LOG": "f8cd920f47595c6d7bc4316517a7ad0b",
".dart_tool/chrome-device/Default/Extension%20State/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Favicons": "1faed84b53721cd95c51fce73ac03329",
".dart_tool/chrome-device/Default/Favicons-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/AvailabilityDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Feature%20Engagement%20Tracker/EventDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/LOG": "5f2394f54eafd7f424c9bb9375616ea4",
".dart_tool/chrome-device/Default/GCM%20Store/Encryption/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db": "178211e953540aa25c082be8a21b5eaa",
".dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/History": "0c9c319659229c41bbb4c4ca093f33b9",
".dart_tool/chrome-device/Default/History-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/LOG": "86f29166a8a53ac79814f4a7a991269f",
".dart_tool/chrome-device/Default/Local%20Storage/leveldb/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data": "00efea3d344f19c8908bb9c5a9f7a477",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account": "00efea3d344f19c8908bb9c5a9f7a477",
".dart_tool/chrome-device/Default/Login%20Data%20For%20Account-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Login%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Cookies": "c55f72614f2cb4d21c85e7028b7d5747",
".dart_tool/chrome-device/Default/Network/Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Network%20Persistent%20State": "b2ecf18a084f02250b971861f5f2873b",
".dart_tool/chrome-device/Default/Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL": "b3ff377122552ba986905422608e166e",
".dart_tool/chrome-device/Default/Network/Reporting%20and%20NEL-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Network/TransportSecurity": "f024f9b701e31d175e5c2ddf20a26ff7",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor": "ee8c60aecb3db96004053725338ac03f",
".dart_tool/chrome-device/Default/Network%20Action%20Predictor-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_model_and_features_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/optimization_guide_model_and_features_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Preferences": "2d15d692cc14d7dff9c6be2a5de47b96",
".dart_tool/chrome-device/Default/PreferredApps": "2b432fef211c69c745aca86de4f8e4ab",
".dart_tool/chrome-device/Default/QuotaManager": "5bfc63d13594417c945df4c64d27a686",
".dart_tool/chrome-device/Default/QuotaManager-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/README": "883d62acd72005f3ad7a14500d482033",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies": "c55f72614f2cb4d21c85e7028b7d5747",
".dart_tool/chrome-device/Default/Safe%20Browsing%20Network/Safe%20Browsing%20Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Secure%20Preferences": "49d1abca5035a7c751f8deb2cd498f08",
".dart_tool/chrome-device/Default/Service%20Worker/Database/000003.log": "502d669712865e7ff19679398bf5d17a",
".dart_tool/chrome-device/Default/Service%20Worker/Database/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Service%20Worker/Database/LOG": "b0f46f4da3433801af4f0f623c2433a3",
".dart_tool/chrome-device/Default/Service%20Worker/Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/2cc80dabc69f58b6_0": "fb1949dfa7a4852f3868a342f87972f3",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Service%20Worker/ScriptCache/index-dir/the-real-index": "7b5e370d5522724828a2f004ee059801",
".dart_tool/chrome-device/Default/Session%20Storage/000003.log": "b721b1e31df9e86204c0cebdaf21eef9",
".dart_tool/chrome-device/Default/Session%20Storage/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Session%20Storage/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Session%20Storage/LOG": "fc115aace702005bcf9bcf5350332e0e",
".dart_tool/chrome-device/Default/Session%20Storage/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sessions/Session_13293216453500237": "f25772172408b1b504da7603cd835a53",
".dart_tool/chrome-device/Default/Sessions/Tabs_13293216470791305": "325bf250bbb1f122d95d766d9b42b19a",
".dart_tool/chrome-device/Default/shared_proto_db/000003.log": "677d52a24056b18420d07c660988026a",
".dart_tool/chrome-device/Default/shared_proto_db/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/shared_proto_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/LOG": "e8eabd48ec8c475b06687a68f7aa7bd0",
".dart_tool/chrome-device/Default/shared_proto_db/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/000003.log": "88d600df5ee5659d7b10f66e33866b98",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG": "b75ce5a4df20c6972faf01fa81f4c09f",
".dart_tool/chrome-device/Default/shared_proto_db/metadata/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Shortcuts": "88e7b85c6b9f8b7b9a93c2adc616a327",
".dart_tool/chrome-device/Default/Shortcuts-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/000003.log": "7547f390a73866718e0715b9417dac1c",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/LOG": "fede308c683c1cca8b96529a47fb56dc",
".dart_tool/chrome-device/Default/Site%20Characteristics%20Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Code%20Cache/js/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Code%20Cache/js/index-dir/the-real-index": "ff7adae0aa11e5136effc508879e1eda",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Code%20Cache/wasm/index": "54cb446f628b2ea4a5bce5769910512e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Code%20Cache/wasm/index-dir/the-real-index": "ff7adae0aa11e5136effc508879e1eda",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/GPUCache/data_0": "cf89d16bb9107c631daabf0c0ee58efb",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/GPUCache/data_1": "f50f89a0a91564d0b8a211f8921aa7de",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/GPUCache/data_2": "0962291d6d367570bee5454721c17e11",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/GPUCache/data_3": "41876349cb12d6db992f1309f22df3f0",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/GPUCache/index": "2e2ca67dcb75aec4b59febb25fa5d656",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Local%20Storage/leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Local%20Storage/leveldb/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Local%20Storage/leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Local%20Storage/leveldb/LOG": "5f4cf8a68198fb31ec174abe456fcab6",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Local%20Storage/leveldb/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Network/Network%20Persistent%20State": "805bd5127b10a396f53db35486b61f0c",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Session%20Storage/000003.log": "9f7eadc15e13d0608b4e4d590499ae2e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Session%20Storage/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Session%20Storage/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Session%20Storage/LOG": "dce1532ec8eaab758998a231a80b92c0",
".dart_tool/chrome-device/Default/Storage/ext/gfdkimpbcpahaombhbimeihdjnejgicl/def/Session%20Storage/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/000003.log": "90881c9c26f29fca29815a08ba858544",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/CURRENT": "46295cac801e5d4857d09837238a6394",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/LOG": "ff5f10c3c399573384177b5832a35f85",
".dart_tool/chrome-device/Default/Sync%20Data/LevelDB/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
".dart_tool/chrome-device/Default/Top%20Sites": "c9c851380078070079ff5dcaac798e7e",
".dart_tool/chrome-device/Default/Top%20Sites-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/chrome-device/Default/Trusted%20Vault": "623be9ff712b32a6b0ce1f93a898a6cf",
".dart_tool/chrome-device/Default/Visited%20Links": "f9ea90fec15949dc9ffe9499f27873c6",
".dart_tool/chrome-device/Default/Web%20Data": "7fead67ab428806ea9389b4453fba318",
".dart_tool/chrome-device/Default/Web%20Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
".dart_tool/package_config.json": "5b43e4d85a93399babff101a093ed630",
".dart_tool/package_config_subset": "ec0ac6516cac17e5ddbda2cd32b9f121",
".dart_tool/version": "27997ce2e76704879847510cb4e5fbe3",
".idea/libraries/Dart_SDK.xml": "d8b8d466d44093341e77ed1033666bea",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "c8ac63a992800982a691a36badcc03cf",
"android/app/src/debug/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/app/src/main/AndroidManifest.xml": "380ceb596b3652ab4147e0aae36010b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "a18248a21b23da0aa6f12b97d981d1f5",
"android/app/src/main/res/values-night/styles.xml": "e71d4d49f44112d5dc835ac7a839dbdb",
"android/app/src/profile/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/build.gradle": "0f6e66826cb3f1bd4e48e0ef40054a46",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "aab2facadc9e1887d843c67f8ea87738",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "0740376cbc9f05e41b5a2d347f14f7f3",
"assets/assets/fonts/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/assets/fonts/Quicksand-Light.ttf": "10ce81d2a0fc09f271edf43e66d80301",
"assets/assets/fonts/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "9e7757030c60a7a6973c9a95d9cea1c0",
"assets/assets/icons/account.png": "8713adfdf5cce6a2cbca2b5bdb3fba23",
"assets/assets/icons/android.png": "8e8e538b9c61fd777c40c598772b7a24",
"assets/assets/icons/appointment_icon.png": "b2b48470f413441f1d5c93c2a0e69f00",
"assets/assets/icons/blue_gradient.png": "f14d345298463784e1b9c9c9e066016e",
"assets/assets/icons/box1.png": "e7de3e656d565ceb04b0ddbb9fadeaa2",
"assets/assets/icons/call.png": "d290c40a5119c019df99fe66b3b909e8",
"assets/assets/icons/call_vector.png": "2348726b3a0088e0b4c17bc8c44ec2cb",
"assets/assets/icons/child.png": "35f4c5b047d91870c9a7ddd3d7920aea",
"assets/assets/icons/choose_problem.png": "911cc60912adef3514c9d0d91ce88321",
"assets/assets/icons/circle_doc.png": "a994bc4903f427dab07e523cce4382a2",
"assets/assets/icons/click-hand.png": "7e11156f3f10bf779fd1e5b99fc7d754",
"assets/assets/icons/clinic.png": "e83dd977202b45d1911cf18c1c167295",
"assets/assets/icons/common_problem.png": "d77d7903e11409a39243320b627d1013",
"assets/assets/icons/confirm_booking_icon.png": "22d55913ca35ae7d8f46ce98ec595173",
"assets/assets/icons/coupon.png": "5d55b082b98f3cabd9a2d80c14da1bd9",
"assets/assets/icons/docs.png": "d5e8a9960b3680eea94436a5417f6d53",
"assets/assets/icons/Doctor%2520page/whatsapp.png": "65deaad717f349f6ba7202d763b79535",
"assets/assets/icons/doctordashboard/booking.png": "147a81e225a89206adea58ee7d7ceb96",
"assets/assets/icons/doctordashboard/call.png": "12efc7bae79ba3b21089f4adf87e2d52",
"assets/assets/icons/doctordashboard/date.png": "2bafd0e3a3387bce4007f17d5ea3b19f",
"assets/assets/icons/doctordashboard/gmail.png": "7e4422cb62d48e9c96a97e94ac6299aa",
"assets/assets/icons/doctordashboard/mail.png": "6b3473f8d540a6221f476bf17aadc4ea",
"assets/assets/icons/doctordashboard/Mask%2520Group.png": "05f66e2a7adca56b781218e3c6770c31",
"assets/assets/icons/doctordashboard/menu.png": "72ae20e5dc585a08309cdb0087158e86",
"assets/assets/icons/doctordashboard/message.png": "00f7f9228654320017b18070e26c97d3",
"assets/assets/icons/doctordashboard/monthly.png": "32b17bbb3a39dd2af6bc1f21f00e221f",
"assets/assets/icons/doctordashboard/notificationbell.png": "125b2679487868c15af9acd20934f661",
"assets/assets/icons/doctordashboard/patient.png": "3eeb6b48230c028a0f792b3aace18f19",
"assets/assets/icons/doctordashboard/print.png": "7ba4795e104bfe920633c5597bfa0caa",
"assets/assets/icons/doctordashboard/shawnmendes.png": "470c301e00b73ae46ce5638dd2e7ac9c",
"assets/assets/icons/doctordashboard/stars.png": "cc15a84debd375365fbd0df9d23b54b1",
"assets/assets/icons/doctordashboard/Vector-1.png": "5daf48bdfae403ecb50b0503343bce9c",
"assets/assets/icons/doctordashboard/Vector.png": "468174f8da06dcca0b4d56ffb1f832d0",
"assets/assets/icons/doctordashboard/week.png": "ef5f6e76d610d06349647b4b5728c490",
"assets/assets/icons/doctordashboard/whatsapp.png": "65deaad717f349f6ba7202d763b79535",
"assets/assets/icons/doc_profile.png": "9f83c71e2ba9b68507cda502f3850369",
"assets/assets/icons/drop-pin.png": "cf69cb2743ddeee55c4451a647adf08f",
"assets/assets/icons/drugs.png": "fdb184a93533dc5b08c6850861123852",
"assets/assets/icons/edit.png": "4fe4177166b403024fd6d2045f81a569",
"assets/assets/icons/eye.png": "404c26cabd9c916b95b5f2bbc639125f",
"assets/assets/icons/face-mask.png": "012ba1abe22e4466486ff50f8a1e09f6",
"assets/assets/icons/female_doc.png": "bd1c3031f245273c48951111a1ab8f57",
"assets/assets/icons/fontisto_date.png": "32b17bbb3a39dd2af6bc1f21f00e221f",
"assets/assets/icons/hand.png": "eaa3258e677d19c7c4ded3bb35346ecd",
"assets/assets/icons/hospital.png": "0f5ef9112307abeb5f5750000ca4633b",
"assets/assets/icons/hospital_icon.png": "604ca224683fbeda63d3de6e82fbdd29",
"assets/assets/icons/house.png": "8789a994188400afbbfe457c14892fdc",
"assets/assets/icons/iso.png": "3450f8b90a7778c8f514bb0f8a6390ec",
"assets/assets/icons/like.png": "6d2c3012cc4d7fe25763f9fb4c6a782a",
"assets/assets/icons/location/donypaul.png": "ba22e3a7b53bc8c7dbb3706aefe1ccf9",
"assets/assets/icons/location/mapmock.png": "ba71d53b9f0d2224e994533b2f737033",
"assets/assets/icons/location.png": "cf69cb2743ddeee55c4451a647adf08f",
"assets/assets/icons/map.png": "e03b85387fa91f341763a5811be6ef80",
"assets/assets/icons/menu.png": "6a322cf8a267fc16c6a8c4db1021e957",
"assets/assets/icons/more.png": "b4008243777476a4324153fcc19fae4e",
"assets/assets/icons/payment_gradient.png": "dadecb11c6ac6eef1c040a087d6d8224",
"assets/assets/icons/phone-1.png": "9776678d962cf0db50e21d1c5e57ac97",
"assets/assets/icons/phone-2.png": "b6a0b52bc91cbb5cc427a996d8d578aa",
"assets/assets/icons/phone-3.png": "2348726b3a0088e0b4c17bc8c44ec2cb",
"assets/assets/icons/pin-drop-2.png": "d8764efacc9c4be177823864a7e1bbac",
"assets/assets/icons/policy.png": "155fd1d7f566d81b6da4456931908e36",
"assets/assets/icons/previous_doc.png": "5c6e947c4921672d95a0d601dfb676ed",
"assets/assets/icons/problem.png": "adb6a74b94c5bad65e9971573800bbd0",
"assets/assets/icons/problem_smile.png": "524453b77c1a20a1787ca4d5be8ecb91",
"assets/assets/icons/profile2.png": "8756f1d24a8d506485cb4734532ec697",
"assets/assets/icons/profileIcon.png": "efa1d60c26ad90d63cc1c49dde5f37a6",
"assets/assets/icons/settings.png": "4b42a61922056fc72d2cdf5504a9c255",
"assets/assets/icons/smile.png": "3b35c162f8aae37c64fcd3871935adb0",
"assets/assets/icons/stars.png": "1425805511fbf7a2a173d97fa0976321",
"assets/assets/icons/svg/city.svg": "5d8ec557c428f88873b8554889b01e5b",
"assets/assets/icons/svg/confirm_password.svg": "fb3d8476d68a0bab0cff6f742d547f9d",
"assets/assets/icons/svg/doctor_code.svg": "4de1b024189c24d7b0ba396f346a5b34",
"assets/assets/icons/svg/lock.svg": "ad4a986fc349d579ed83eb147625c13f",
"assets/assets/icons/svg/mail.svg": "b6c27211e109c4b8e1b5d0eb1b76d728",
"assets/assets/icons/svg/password.svg": "27fa3f657fd88957f110bec77a42d5c5",
"assets/assets/icons/svg/person.svg": "7d0cd7f7e4655f616470a8e366796c71",
"assets/assets/icons/svg/phone.svg": "b264e76713b2e10d675926d9857948ff",
"assets/assets/icons/svg/state.svg": "4b3b12b35c9fab18ef0ca6f70ad5151e",
"assets/assets/icons/tests/bitetest.png": "14e353ad38441a54fded92061664cd98",
"assets/assets/icons/tests/boneloose.png": "9d86f9a06847e24ad53e2cc9e9515d91",
"assets/assets/icons/tests/cavity.png": "f79397645a5046e9c3e08798e5572aaa",
"assets/assets/icons/tests/gingivit.png": "060cf86b5b2cfe30b490c05b20379198",
"assets/assets/icons/tests/oralcancer.png": "15edaadc30b60df629b4eb8c1fbb2506",
"assets/assets/icons/tests/oralhygyn.png": "e2fe2a338859182e4093310e7f081ee7",
"assets/assets/icons/tests/xray.png": "479dae6efaf7e53024deebf563b3a539",
"assets/assets/icons/tests.png": "01a5965bf040dc0f2241b997786e2eee",
"assets/assets/icons/thumbsup.png": "6d2c3012cc4d7fe25763f9fb4c6a782a",
"assets/assets/icons/tools-1.png": "d817acb39e93a6987eca744377efb8b2",
"assets/assets/icons/tools-2.png": "01298487bc81ac9002f5759e5a2de75a",
"assets/assets/icons/tooth/+.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/icons/tooth/bridges.png": "d291386cb2194faa4222bf11e7bee769",
"assets/assets/icons/tooth/cavityfittings.png": "93e780d713580b63f584da058d1564de",
"assets/assets/icons/tooth/childteeth.png": "9b1fe172714ec9485e152362d56fe939",
"assets/assets/icons/tooth/costemic.png": "b0ef3d8fdf4e735b9d335272b4797254",
"assets/assets/icons/tooth/dentalimplants.png": "64f716118c9285462729a564e0ec4ad7",
"assets/assets/icons/tooth/dentures.png": "96c85f87cd83cf198caccd7e3421239d",
"assets/assets/icons/tooth/Group%252080.png": "aab03aa5c5eb5c32373815c9e8d4a9b0",
"assets/assets/icons/tooth/gumsurgery.png": "ebf1e2aee76b1f8f152e8f71ffe26c51",
"assets/assets/icons/tooth/Mask%2520Group-9.png": "1c98a63ebd535760ed1ca850344d0e25",
"assets/assets/icons/tooth/orthodontics.png": "7ed1ae95ce6b16cdb833587e0f04b69a",
"assets/assets/icons/tooth/rootcanal.png": "129b30b98850779122b1905ba2b50f05",
"assets/assets/icons/tooth/toothwhite.png": "6f7607d5723090b13e08a3b0ae943f99",
"assets/assets/icons/tooth-1.png": "548a2fa3d2fefc779bec998a3956023d",
"assets/assets/icons/tooth-10.png": "adb6a74b94c5bad65e9971573800bbd0",
"assets/assets/icons/tooth-2.png": "6d7511ceb59703d2975cea0418271927",
"assets/assets/icons/tooth-3.png": "c2e1789060e99514444ddbde5e2ca906",
"assets/assets/icons/tooth-4.png": "940fea5c1d379ebc033ad7d0436a30d4",
"assets/assets/icons/tooth-5.png": "31b6f0cddca77f30568cec66499e0b78",
"assets/assets/icons/tooth-6.png": "3f766947b0e846381a0227da7e7d71dc",
"assets/assets/icons/tooth-7.png": "44fba2d2e55a6c36e7de2c180a5d7162",
"assets/assets/icons/tooth-8.png": "867e6c2b2fc92cf64d65b5e07363587b",
"assets/assets/icons/tooth-9.png": "6df444bd56684d72b26fec1a67dfbf56",
"assets/assets/icons/upcoming_doctor.png": "31a3326cbbe843d17e9507fb5ea2ac01",
"assets/assets/icons/user.png": "0a19a3f1a0083ccc62f7167976eb97f2",
"assets/assets/icons/video-1.png": "a4364f5fa52367a480bf3e0904f8ef84",
"assets/assets/icons/video-2.png": "fcb4c0723519c6cfbe223385e450599d",
"assets/assets/icons/whatsapp-1.png": "1fdb4335c140947fe83fef6def7b80b6",
"assets/assets/icons/whatsapp-2.png": "16347a6240962f976153a39b114288d8",
"assets/assets/icons/whatsapp.png": "9cbb9787d17da8250e1d816c02bb644e",
"assets/assets/images/banner_img.jpg": "3ade4c2fec046c846cd37dd5d8376534",
"assets/assets/images/blue_background.png": "f5391f27e328d8e0064f9a937e9cb86d",
"assets/assets/images/circle_patient_img.png": "da50b8b0a523dee12c7e76458a2b9a6c",
"assets/assets/images/dental_clinic.png": "22e0cbdea30d74e77f82fe9fe7039bd2",
"assets/assets/images/dentist_mobile_view.png": "13301d36dada5d5cd26866cf725fa774",
"assets/assets/images/dentist_mobile_view2.png": "68fb55fed20e372474151f9a4293d8a5",
"assets/assets/images/docimg1.jpg": "a17c8d8698b8a9a01d6b14e19810b82a",
"assets/assets/images/docimg2.jpg": "aa2b1ee1253cdeab7f3b8525254aca14",
"assets/assets/images/docimg3.jpg": "7f7250deb54e7dd22dc23fb46fa00e54",
"assets/assets/images/docimg4.jpg": "18603adb9dce5757dc1f43007062bebd",
"assets/assets/images/docimg543.jpg": "7b0ddf58c9303ef45e79e7c5c6051b29",
"assets/assets/images/doctor-img.png": "1ad1da637dfb5a4fbf56ca903fa57fd8",
"assets/assets/images/doc_code_bg.png": "beee1d1b7b09bb853d10af2c7dae39d4",
"assets/assets/images/doc_code_img.png": "74ba84835f348fa98b80d9cf825611b8",
"assets/assets/images/doc_male_img.png": "8617b1aeb33569005e401312fc277e5c",
"assets/assets/images/forgot_pass_bg.png": "ef6d4fed28048d475e2e0afa67f91aa8",
"assets/assets/images/intro.jpg": "925e81a0612d413c910cb156e8587bcb",
"assets/assets/images/login.png": "81a53eefb232ef9235f4721953591fba",
"assets/assets/images/login_bg.png": "9b395487ef1ccf163b34cf82bebcf03e",
"assets/assets/images/otpscreen_img.png": "494ded770b2519976b14fc8cb45d8a48",
"assets/assets/images/patient.png": "f30262ff87bbf97d93d0d9419fd0371a",
"assets/assets/images/person.png": "2690c43fe57470ba27e54e2f854e7cdb",
"assets/assets/images/random.jpg": "603080d922b7bea8950cec0677cb3172",
"assets/assets/images/random2.jpg": "178310001a70a84d691d263f233b1feb",
"assets/assets/images/register_img.png": "a2a1982c2939aa93de93ffe4f97888c1",
"assets/assets/lottie/booking_confirm.json": "551edd62cd2ec1edb17b52f21c2bc9de",
"assets/assets/lottie/otp_sent.json": "6d5581da5bd2c2d9fb69a24f4f7219aa",
"assets/assets/lottie/otp_verified.json": "ad41a910073e1f54c529ce2345bbb9b1",
"assets/assets/onboad.png": "9068412ea319f5e7d2039ef48530def3",
"assets/FontManifest.json": "da9e8be348abd1a88c448bd24139c24b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4680e691eb9c8d34afcec48cee6fa56e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"build/c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "9e91f9ddfac10cdd2fc0e8aa0c57ca5c",
"build/daefd419b79583914d87278d161de5fc/gen_dart_plugin_registrant.stamp": "532f8146d37b38f259b6836ef7e47b0f",
"build/daefd419b79583914d87278d161de5fc/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/daefd419b79583914d87278d161de5fc/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"build/flutter_assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/flutter_assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"build/flutter_assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"build/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c999c5d82cc09484c45d87ccfb30d4d6",
"/": "8cbfd77ba7def5993056a9dc551cd8af",
"ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "598fca7abe8f0ca47a2e640287762cb2",
"ios/Flutter/Generated.xcconfig": "91f08ab8efe6c3b3769f4c305397021f",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "440c34fbb0d290bebc9f05ee681547bd",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "085e3343bee4f742010057a1928295a2",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "a6fb1329af99457b050f36d34b9bfb35",
"main.dart.js": "0ec83061eac35418e7f2e69ac7f3852b",
"manifest.json": "1519eca177fec6139322fa752a507c15",
"pubspec.lock": "a21a8d018d947b87e35da8c0947e5ab3",
"pubspec.yaml": "2c2879b8ad49ba7494ce616d467eb21d",
"README.md": "d9fec75372da6c786d1b533b9e26def0",
"test/widget_test.dart": "95ff94f4eed36f4a403cb72b1ec744ff",
"version.json": "afb372ce2bf6aa488af2db9f8d33dbc3",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "8cbfd77ba7def5993056a9dc551cd8af",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835",
"windows/CMakeLists.txt": "5182214bb6e2959aabc06505442d23aa",
"windows/flutter/CMakeLists.txt": "e0f804799e73e21a8f7455f3d7810526",
"windows/flutter/ephemeral/generated_config.cmake": "11a56d61c134f1be0f3e11a57a539cae",
"windows/flutter/generated_plugins.cmake": "e0d9eb1174a4e1511a420cdc3a78b04e",
"windows/flutter/generated_plugin_registrant.cc": "c019bc00d9916233620f2e622922a708",
"windows/flutter/generated_plugin_registrant.h": "0c3df6700414e7f332dfa2582a1ae29e",
"windows/runner/CMakeLists.txt": "f3e83cce73b27436e3610a7f1bf4082b",
"windows/runner/flutter_window.cpp": "f853be20595509bef5128dc4eebf8b8a",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "e32754af8da2d4bdeeda9164a3d22694",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "e6f4cf89a9b09cc07835380ee88ad54f",
"windows/runner/Runner.rc": "fd36d01d7dd80f3b6ffb769b96debfca",
"windows/runner/utils.cpp": "931ef80910e7d0fc61010bf731bb4089",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "51d773f28ac8f760edd9003a06a96723",
"windows/runner/win32_window.h": "ca8cb4198d0ab7865e929fba6318d26e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
