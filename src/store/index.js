import Vue from "vue";
import Vuex from "vuex";
import { get, post } from "axios";
const MILISECONDS_IN_A_SECOND = 1000;
Vue.use(Vuex);
const LEARNING_STATUS = ["unknown", "learned", "mastered"];

export default new Vuex.Store({
  state: {
    words: [
      {
        id: "cd31edb6-9d0a-4995-88e8-ab732d4f2908",
        category: "networking",
        wordTranslations: {
          en: "Zytrex",
          pl: "Aquafire"
        },
        status: "learned"
      },
      {
        id: "3511c869-aecb-425a-83cf-9b0d8e6aee9a",
        category: "networking",
        wordTranslations: {
          en: "Rubadub",
          pl: "Datagen"
        },
        status: "mastered"
      },
      {
        id: "3165dbe2-1c7e-4765-94aa-160ca66a64fc",
        category: "networking",
        wordTranslations: {
          en: "Macronaut",
          pl: "Everest"
        },
        status: "unknown"
      },
      {
        id: "52bb2ce1-78d0-4137-a35f-28fd409f7e39",
        category: "networking",
        wordTranslations: {
          en: "Namebox",
          pl: "Verbus"
        },
        status: "unknown"
      },
      {
        id: "beaafc55-a251-4942-b419-c028a4e7e911",
        category: "networking",
        wordTranslations: {
          en: "Gadtron",
          pl: "Idego"
        },
        status: "unknown"
      },
      {
        id: "92f6b8d7-03bb-4309-97cd-ecc238e2fc98",
        category: "networking",
        wordTranslations: {
          en: "Emergent",
          pl: "Gallaxia"
        },
        status: "unknown"
      },
      {
        id: "4b6147cf-9992-4979-a95b-a47f81483ce1",
        category: "networking",
        wordTranslations: {
          en: "Zoarere",
          pl: "Xinware"
        },
        status: "mastered"
      },
      {
        id: "629a209e-da30-42db-8dc2-0148da871460",
        category: "networking",
        wordTranslations: {
          en: "Firewax",
          pl: "Neptide"
        },
        status: "unknown"
      },
      {
        id: "b2547c17-4fb8-422e-a42a-b1ebc2e152cd",
        category: "networking",
        wordTranslations: {
          en: "Billmed",
          pl: "Orbixtar"
        },
        status: "mastered"
      },
      {
        id: "25c84008-0f11-478a-bda4-ce0030a434ff",
        category: "networking",
        wordTranslations: {
          en: "Gaptec",
          pl: "Biolive"
        },
        status: "unknown"
      },
      {
        id: "b22b5c44-1856-46d1-88ec-cfe9e9398c8e",
        category: "networking",
        wordTranslations: {
          en: "Rameon",
          pl: "Fiberox"
        },
        status: "mastered"
      },
      {
        id: "f0caf753-91f3-40bb-8879-b5de5e56af14",
        category: "networking",
        wordTranslations: {
          en: "Gleamink",
          pl: "Pyrami"
        },
        status: "unknown"
      },
      {
        id: "9ca5b011-7258-4c67-b91b-05ccaebdf0ce",
        category: "networking",
        wordTranslations: {
          en: "Gink",
          pl: "Retrack"
        },
        status: "learned"
      },
      {
        id: "0099402c-89e0-4dd4-8c0d-6057aa86daf7",
        category: "networking",
        wordTranslations: {
          en: "Enerforce",
          pl: "Quilch"
        },
        status: "learned"
      },
      {
        id: "f163c415-be60-4006-8747-c31e6dad6577",
        category: "networking",
        wordTranslations: {
          en: "Miracula",
          pl: "Splinx"
        },
        status: "mastered"
      },
      {
        id: "1b8b33b5-5857-499e-be4b-2a85d7052f08",
        category: "networking",
        wordTranslations: {
          en: "Intergeek",
          pl: "Imaginart"
        },
        status: "learned"
      },
      {
        id: "a99ac26a-6454-47e1-af6d-3f1684ed7da3",
        category: "networking",
        wordTranslations: {
          en: "Ozean",
          pl: "Tourmania"
        },
        status: "learned"
      },
      {
        id: "a2de0f42-e1de-487d-80fd-8ff657f306d2",
        category: "networking",
        wordTranslations: {
          en: "Techade",
          pl: "Remotion"
        },
        status: "learned"
      },
      {
        id: "a6b43c57-7255-44c6-b175-923870d4b280",
        category: "networking",
        wordTranslations: {
          en: "Neocent",
          pl: "Genekom"
        },
        status: "learned"
      },
      {
        id: "3a93c975-393c-492b-81db-f0cc95c12a72",
        category: "networking",
        wordTranslations: {
          en: "Combogen",
          pl: "Rodemco"
        },
        status: "unknown"
      },
      {
        id: "217fbf1d-5229-4718-a947-9657d4eab140",
        category: "networking",
        wordTranslations: {
          en: "Valpreal",
          pl: "Miraclis"
        },
        status: "learned"
      },
      {
        id: "cdcb717a-554c-481d-bca7-542544233bbc",
        category: "networking",
        wordTranslations: {
          en: "Geeky",
          pl: "Earthplex"
        },
        status: "mastered"
      },
      {
        id: "2c2f87e3-24f6-4e48-882b-29fc4bc57338",
        category: "networking",
        wordTranslations: {
          en: "Ewaves",
          pl: "Deminimum"
        },
        status: "unknown"
      },
      {
        id: "c0602410-c373-47d6-8753-dd001c22e305",
        category: "networking",
        wordTranslations: {
          en: "Geekwagon",
          pl: "Nimon"
        },
        status: "mastered"
      },
      {
        id: "f9d2b21f-b261-46a2-8796-cc77f053ee54",
        category: "networking",
        wordTranslations: {
          en: "Isopop",
          pl: "Aquasseur"
        },
        status: "mastered"
      },
      {
        id: "04b15f10-0bf9-48d4-bb32-b59703fe6252",
        category: "networking",
        wordTranslations: {
          en: "Keengen",
          pl: "Irack"
        },
        status: "unknown"
      },
      {
        id: "76db262a-ae15-4a02-9aed-b3a6dd9ae885",
        category: "networking",
        wordTranslations: {
          en: "Extremo",
          pl: "Caxt"
        },
        status: "learned"
      },
      {
        id: "10f6dd8d-33d9-4b85-8047-9864fecf1ddb",
        category: "networking",
        wordTranslations: {
          en: "Fangold",
          pl: "Urbanshee"
        },
        status: "unknown"
      },
      {
        id: "8479a98d-93dc-4652-9c66-9b35ab4edbcc",
        category: "networking",
        wordTranslations: {
          en: "Songlines",
          pl: "Lunchpad"
        },
        status: "learned"
      },
      {
        id: "a16dfde6-5d69-4038-8bb6-5ebf6a17a2fd",
        category: "networking",
        wordTranslations: {
          en: "Telepark",
          pl: "Netur"
        },
        status: "learned"
      },
      {
        id: "d7fc921a-5a1b-47b5-85a7-685004f001a3",
        category: "networking",
        wordTranslations: {
          en: "Pearlesex",
          pl: "Vixo"
        },
        status: "learned"
      },
      {
        id: "9a201bb6-c345-4ece-a9f7-57d34c68b331",
        category: "networking",
        wordTranslations: {
          en: "Geostele",
          pl: "Concility"
        },
        status: "learned"
      },
      {
        id: "1bc61127-e01f-4cef-a6b3-91419e43bc4a",
        category: "networking",
        wordTranslations: {
          en: "Menbrain",
          pl: "Comtent"
        },
        status: "learned"
      },
      {
        id: "f30e8679-f374-455f-844a-f83136ebf095",
        category: "networking",
        wordTranslations: {
          en: "Boink",
          pl: "Exostream"
        },
        status: "mastered"
      },
      {
        id: "967d146d-5b5d-436f-bd9e-b3f6faf7814f",
        category: "networking",
        wordTranslations: {
          en: "Comvene",
          pl: "Geeknet"
        },
        status: "unknown"
      },
      {
        id: "40cbe4fc-e959-4ca7-8ebf-d7d568e49be9",
        category: "networking",
        wordTranslations: {
          en: "Signidyne",
          pl: "Zillacon"
        },
        status: "learned"
      },
      {
        id: "a1952274-ebb5-4c47-a2db-c5a64deaee5f",
        category: "networking",
        wordTranslations: {
          en: "Momentia",
          pl: "Ginkogene"
        },
        status: "unknown"
      },
      {
        id: "6a7e0f49-9d17-45dc-9408-e6e607ccad70",
        category: "networking",
        wordTranslations: {
          en: "Veraq",
          pl: "Signity"
        },
        status: "mastered"
      },
      {
        id: "daf16a5d-83d1-4c34-9ffd-c3714cabb5c8",
        category: "networking",
        wordTranslations: {
          en: "Joviold",
          pl: "Luxuria"
        },
        status: "mastered"
      },
      {
        id: "c311449a-2cbe-4c4a-bf79-b8a0a6dc15ba",
        category: "networking",
        wordTranslations: {
          en: "Supportal",
          pl: "Eventage"
        },
        status: "mastered"
      },
      {
        id: "c75b60bc-c46e-4552-873a-d565ee0366b2",
        category: "networking",
        wordTranslations: {
          en: "Zilladyne",
          pl: "Qualitern"
        },
        status: "learned"
      },
      {
        id: "774d3765-add0-46d4-ad42-eeb426292035",
        category: "networking",
        wordTranslations: {
          en: "Parleynet",
          pl: "Steeltab"
        },
        status: "mastered"
      },
      {
        id: "3f2bd963-2886-4a00-b564-f44a4d9473b4",
        category: "networking",
        wordTranslations: {
          en: "Talae",
          pl: "Comtest"
        },
        status: "mastered"
      },
      {
        id: "7eb04edf-a701-4158-8e89-c4d62be40c8f",
        category: "networking",
        wordTranslations: {
          en: "Liquidoc",
          pl: "Artiq"
        },
        status: "learned"
      },
      {
        id: "8a567191-4ce6-410a-ac49-7951ead7d828",
        category: "networking",
        wordTranslations: {
          en: "Zaj",
          pl: "Naxdis"
        },
        status: "mastered"
      },
      {
        id: "3893945c-7b1c-4efb-9d65-22dcb6e6f16a",
        category: "networking",
        wordTranslations: {
          en: "Inquala",
          pl: "Senmei"
        },
        status: "unknown"
      },
      {
        id: "8db834e2-012f-49b3-bd39-3d4ac142030f",
        category: "networking",
        wordTranslations: {
          en: "Comveyor",
          pl: "Anocha"
        },
        status: "learned"
      },
      {
        id: "44b812d9-396f-4980-bf2b-4790390e77c5",
        category: "networking",
        wordTranslations: {
          en: "Brainclip",
          pl: "Olucore"
        },
        status: "unknown"
      },
      {
        id: "6749c568-2434-4073-b8cf-4ec050f7e92f",
        category: "networking",
        wordTranslations: {
          en: "Furnitech",
          pl: "Pheast"
        },
        status: "mastered"
      },
      {
        id: "54af2bd8-5804-457a-9453-a296fa8932f9",
        category: "networking",
        wordTranslations: {
          en: "Acrodance",
          pl: "Prowaste"
        },
        status: "mastered"
      },
      {
        id: "11fb09dd-7b52-46cb-b0c9-b3ff7f829991",
        category: "programming",
        wordTranslations: {
          en: "Pathways",
          pl: "Virva"
        },
        status: "unknown"
      },
      {
        id: "6adc9fc6-56e9-40eb-bf98-bf58206c82a7",
        category: "programming",
        wordTranslations: {
          en: "Arctiq",
          pl: "Signity"
        },
        status: "mastered"
      },
      {
        id: "cea1b0ef-5eec-401e-858a-3083d1abe361",
        category: "programming",
        wordTranslations: {
          en: "Plutorque",
          pl: "Iplax"
        },
        status: "mastered"
      },
      {
        id: "96676060-9f1d-463c-9e7c-3898c9ac9d0e",
        category: "programming",
        wordTranslations: {
          en: "Xsports",
          pl: "Accruex"
        },
        status: "mastered"
      },
      {
        id: "005aa642-eb9e-4782-90b8-c9ac2375d62c",
        category: "programming",
        wordTranslations: {
          en: "Hinway",
          pl: "Zaphire"
        },
        status: "mastered"
      },
      {
        id: "d12da1ed-8751-46ce-a130-2f8fb2a52297",
        category: "programming",
        wordTranslations: {
          en: "Enthaze",
          pl: "Kozgene"
        },
        status: "mastered"
      },
      {
        id: "cb4dba35-317b-468e-af2b-930c9cffd69c",
        category: "programming",
        wordTranslations: {
          en: "Centree",
          pl: "Yogasm"
        },
        status: "learned"
      },
      {
        id: "80da3169-610d-48e8-81b4-ff3fc44a18b1",
        category: "programming",
        wordTranslations: {
          en: "Kinetica",
          pl: "Cytrak"
        },
        status: "unknown"
      },
      {
        id: "7859d765-65df-4481-be90-e7d4b3c924e2",
        category: "programming",
        wordTranslations: {
          en: "Grok",
          pl: "Quordate"
        },
        status: "unknown"
      },
      {
        id: "508300c6-48fe-4ed2-bab5-f09108c85479",
        category: "programming",
        wordTranslations: {
          en: "Thredz",
          pl: "Electonic"
        },
        status: "learned"
      },
      {
        id: "d762ccd6-6149-47c0-a48d-3d3ffe319850",
        category: "programming",
        wordTranslations: {
          en: "Zilidium",
          pl: "Uncorp"
        },
        status: "learned"
      },
      {
        id: "8afe934d-cabf-45e8-b55d-0b865b0f7813",
        category: "programming",
        wordTranslations: {
          en: "Handshake",
          pl: "Zboo"
        },
        status: "mastered"
      },
      {
        id: "a0bd1796-012f-4672-9c15-a94958122416",
        category: "programming",
        wordTranslations: {
          en: "Prosely",
          pl: "Zentry"
        },
        status: "mastered"
      },
      {
        id: "7ade5064-9046-4717-93cb-7288e5f07e0e",
        category: "programming",
        wordTranslations: {
          en: "Aquoavo",
          pl: "Enomen"
        },
        status: "learned"
      },
      {
        id: "3ceabf2a-68c0-48df-a6d4-5cd0b141f34d",
        category: "programming",
        wordTranslations: {
          en: "Rockyard",
          pl: "Roboid"
        },
        status: "learned"
      },
      {
        id: "0e0b145a-4936-40f3-af4f-1327905e33f4",
        category: "programming",
        wordTranslations: {
          en: "Xelegyl",
          pl: "Macronaut"
        },
        status: "mastered"
      },
      {
        id: "b9a20e5e-87a5-40d6-b214-1b6a7331f5b4",
        category: "programming",
        wordTranslations: {
          en: "Terascape",
          pl: "Bulljuice"
        },
        status: "unknown"
      },
      {
        id: "6eaf8048-20fd-4f9f-8d38-710dbacb9625",
        category: "programming",
        wordTranslations: {
          en: "Orbaxter",
          pl: "Exoblue"
        },
        status: "learned"
      },
      {
        id: "fbbc4d08-2e6d-428d-92d7-05958d259b52",
        category: "programming",
        wordTranslations: {
          en: "Eclipsent",
          pl: "Olucore"
        },
        status: "learned"
      },
      {
        id: "10f80eae-c466-4f77-910c-5ab8354e948e",
        category: "programming",
        wordTranslations: {
          en: "Tropoli",
          pl: "Mangelica"
        },
        status: "unknown"
      },
      {
        id: "ceff4e78-816c-43f6-bb10-e13f5a3a3d20",
        category: "programming",
        wordTranslations: {
          en: "Martgo",
          pl: "Fossiel"
        },
        status: "mastered"
      },
      {
        id: "871e185a-4858-485a-b46e-45153e7647a6",
        category: "programming",
        wordTranslations: {
          en: "Kyaguru",
          pl: "Dancerity"
        },
        status: "learned"
      },
      {
        id: "f746e51a-344d-4f55-9005-633aed0868b4",
        category: "programming",
        wordTranslations: {
          en: "Comtours",
          pl: "Waretel"
        },
        status: "learned"
      },
      {
        id: "e35896ed-5f61-460b-81bb-69666bc61bdb",
        category: "programming",
        wordTranslations: {
          en: "Grainspot",
          pl: "Fiberox"
        },
        status: "unknown"
      },
      {
        id: "cf5265b2-9501-4464-a1a8-97013bf73bc1",
        category: "programming",
        wordTranslations: {
          en: "Genekom",
          pl: "Quilm"
        },
        status: "unknown"
      },
      {
        id: "e9612d0a-abb7-46d7-9187-ec4c8549da16",
        category: "programming",
        wordTranslations: {
          en: "Homelux",
          pl: "Ronelon"
        },
        status: "mastered"
      },
      {
        id: "6b08e12d-d640-4b42-a4c5-72e4fd565452",
        category: "programming",
        wordTranslations: {
          en: "Norali",
          pl: "Deminimum"
        },
        status: "learned"
      },
      {
        id: "29007b3d-d635-477c-8387-610ab31ab14d",
        category: "programming",
        wordTranslations: {
          en: "Maroptic",
          pl: "Naxdis"
        },
        status: "unknown"
      },
      {
        id: "8837ea10-8867-49bf-9497-82c776b23049",
        category: "programming",
        wordTranslations: {
          en: "Momentia",
          pl: "Skybold"
        },
        status: "learned"
      },
      {
        id: "a193df77-352b-4a0c-80ec-4567b3c82951",
        category: "programming",
        wordTranslations: {
          en: "Datacator",
          pl: "Sentia"
        },
        status: "unknown"
      },
      {
        id: "bad43ecd-acb1-4c3f-afab-99a39ad5646d",
        category: "programming",
        wordTranslations: {
          en: "Translink",
          pl: "Isoternia"
        },
        status: "unknown"
      },
      {
        id: "2ea8686e-474e-4476-b782-cd7e58dbeb34",
        category: "programming",
        wordTranslations: {
          en: "Isoplex",
          pl: "Fuelworks"
        },
        status: "mastered"
      },
      {
        id: "4f7be95f-7119-41e5-9845-dd0b1c18145d",
        category: "programming",
        wordTranslations: {
          en: "Norsul",
          pl: "Comtent"
        },
        status: "unknown"
      },
      {
        id: "4cdc44da-371b-4154-8d51-b50474b0da2e",
        category: "programming",
        wordTranslations: {
          en: "Ontality",
          pl: "Orbiflex"
        },
        status: "unknown"
      },
      {
        id: "f43e1e63-3346-454a-8d0b-975cc525f4a1",
        category: "programming",
        wordTranslations: {
          en: "Flexigen",
          pl: "Pharmacon"
        },
        status: "mastered"
      },
      {
        id: "1667e5a7-a8f4-4f6a-96f1-7b26c04be2eb",
        category: "programming",
        wordTranslations: {
          en: "Stockpost",
          pl: "Kindaloo"
        },
        status: "learned"
      },
      {
        id: "c4ba1b6f-00c1-4882-931d-fe673e3ad939",
        category: "programming",
        wordTranslations: {
          en: "Xplor",
          pl: "Steeltab"
        },
        status: "learned"
      },
      {
        id: "6eea2673-e4d6-4b93-a159-56182a38bea1",
        category: "programming",
        wordTranslations: {
          en: "Comstruct",
          pl: "Billmed"
        },
        status: "unknown"
      },
      {
        id: "1ff71e6c-736c-418c-9fc2-5456e9740b41",
        category: "programming",
        wordTranslations: {
          en: "Aclima",
          pl: "Krog"
        },
        status: "mastered"
      },
      {
        id: "93038a7a-091a-4589-a948-582212fc3c2c",
        category: "programming",
        wordTranslations: {
          en: "Nimon",
          pl: "Zentime"
        },
        status: "learned"
      },
      {
        id: "aa7777a4-9c49-4f9d-96aa-f786854c2294",
        category: "programming",
        wordTranslations: {
          en: "Geeky",
          pl: "Intradisk"
        },
        status: "mastered"
      },
      {
        id: "2c1c1ae4-16a7-49c9-864f-d03413238dad",
        category: "programming",
        wordTranslations: {
          en: "Undertap",
          pl: "Magnafone"
        },
        status: "mastered"
      },
      {
        id: "593f9900-acef-4896-a7a1-a9ddb3332c18",
        category: "programming",
        wordTranslations: {
          en: "Urbanshee",
          pl: "Neptide"
        },
        status: "mastered"
      },
      {
        id: "c5f4090e-37f9-4710-a90b-47d363b74588",
        category: "programming",
        wordTranslations: {
          en: "Enersol",
          pl: "Securia"
        },
        status: "mastered"
      },
      {
        id: "d690680f-07de-45c3-adb1-80ce2d2f206d",
        category: "programming",
        wordTranslations: {
          en: "Austech",
          pl: "Zensus"
        },
        status: "mastered"
      },
      {
        id: "9506777e-fe03-4d94-aac3-06d8243f12ef",
        category: "programming",
        wordTranslations: {
          en: "Housedown",
          pl: "Phormula"
        },
        status: "unknown"
      },
      {
        id: "329a5a25-dc74-44d5-884f-f787c8076527",
        category: "programming",
        wordTranslations: {
          en: "Centice",
          pl: "Brainquil"
        },
        status: "unknown"
      },
      {
        id: "134e8756-ef1a-48e7-85b5-972c474bbaeb",
        category: "programming",
        wordTranslations: {
          en: "Manglo",
          pl: "Egypto"
        },
        status: "unknown"
      },
      {
        id: "34f3bc18-7583-4dfa-8217-9e58a3a6e079",
        category: "programming",
        wordTranslations: {
          en: "Comtrail",
          pl: "Imant"
        },
        status: "mastered"
      },
      {
        id: "1e936161-7562-419e-9b82-d807aa77badd",
        category: "programming",
        wordTranslations: {
          en: "Panzent",
          pl: "Pulze"
        },
        status: "unknown"
      },

      {
        id: "2c0cb176-4387-4024-bdfa-36cfcc76fd06",
        category: "operatingsystems",
        wordTranslations: {
          en: "Orbiflex",
          pl: "Enjola"
        },
        status: "mastered"
      },
      {
        id: "4882494e-6abe-4f9d-b2bb-0eef0f957356",
        category: "operatingsystems",
        wordTranslations: {
          en: "Memora",
          pl: "Frolix"
        },
        status: "unknown"
      },
      {
        id: "21591cf8-de2e-421c-9e44-be1269943d1c",
        category: "operatingsystems",
        wordTranslations: {
          en: "Moltonic",
          pl: "Pivitol"
        },
        status: "unknown"
      },
      {
        id: "7d173882-4ca9-4e3e-8827-5bddb90abfb0",
        category: "operatingsystems",
        wordTranslations: {
          en: "Ezent",
          pl: "Digiprint"
        },
        status: "learned"
      },
      {
        id: "72cb3cba-6b77-4401-b6f0-b5f22595ee15",
        category: "operatingsystems",
        wordTranslations: {
          en: "Zilladyne",
          pl: "Biohab"
        },
        status: "learned"
      },
      {
        id: "e7cefc28-9400-4f1c-9f04-d85d6ab0f03c",
        category: "operatingsystems",
        wordTranslations: {
          en: "Kinetica",
          pl: "Splinx"
        },
        status: "unknown"
      },
      {
        id: "d52826b1-6fda-4ef1-b7a6-29c3b42b3b00",
        category: "operatingsystems",
        wordTranslations: {
          en: "Maximind",
          pl: "Zoid"
        },
        status: "mastered"
      },
      {
        id: "c3f7bacc-3e05-4c00-9788-27c41e80e8df",
        category: "operatingsystems",
        wordTranslations: {
          en: "Zaggle",
          pl: "Kegular"
        },
        status: "unknown"
      },
      {
        id: "1172f553-e9fc-4b3f-bae9-0eaa26960c8f",
        category: "operatingsystems",
        wordTranslations: {
          en: "Shadease",
          pl: "Indexia"
        },
        status: "unknown"
      },
      {
        id: "30f7e4f8-5352-49a1-9ae6-90e2c3f7e41a",
        category: "operatingsystems",
        wordTranslations: {
          en: "Protodyne",
          pl: "Repetwire"
        },
        status: "unknown"
      },
      {
        id: "e894c113-24fb-4199-b4c2-7be2cf4ff96d",
        category: "operatingsystems",
        wordTranslations: {
          en: "Hydrocom",
          pl: "Bicol"
        },
        status: "learned"
      },
      {
        id: "b1fbc0a7-57b4-4fa8-a9f1-80a6aaa8bb13",
        category: "operatingsystems",
        wordTranslations: {
          en: "Limozen",
          pl: "Geekfarm"
        },
        status: "learned"
      },
      {
        id: "adbcbc4f-7e2c-4637-adc4-f0008b5b1db1",
        category: "operatingsystems",
        wordTranslations: {
          en: "Eventix",
          pl: "Geeknet"
        },
        status: "learned"
      },
      {
        id: "3deec1e9-3126-4bc8-a64d-c99fa0398a45",
        category: "operatingsystems",
        wordTranslations: {
          en: "Insurity",
          pl: "Goko"
        },
        status: "mastered"
      },
      {
        id: "1612a624-dffa-46c1-b20d-f35969020de4",
        category: "operatingsystems",
        wordTranslations: {
          en: "Urbanshee",
          pl: "Mantro"
        },
        status: "mastered"
      },
      {
        id: "38e9587c-3fd0-4e50-8040-a4b3864de2d2",
        category: "operatingsystems",
        wordTranslations: {
          en: "Ecosys",
          pl: "Remold"
        },
        status: "mastered"
      },
      {
        id: "76ca847d-784a-49a0-8f76-f607f37502b8",
        category: "operatingsystems",
        wordTranslations: {
          en: "Zork",
          pl: "Gogol"
        },
        status: "mastered"
      },
      {
        id: "fafca166-6578-4438-b9af-b94609282eb8",
        category: "operatingsystems",
        wordTranslations: {
          en: "Kongle",
          pl: "Quarx"
        },
        status: "mastered"
      },
      {
        id: "f5bc92d0-d852-4679-b8c4-ea8d8204fe1f",
        category: "operatingsystems",
        wordTranslations: {
          en: "Buzzopia",
          pl: "Kneedles"
        },
        status: "learned"
      },
      {
        id: "e34a9c37-00e7-4451-bcf1-1f83d13cb8ef",
        category: "operatingsystems",
        wordTranslations: {
          en: "Motovate",
          pl: "Eyewax"
        },
        status: "unknown"
      },
      {
        id: "f8146deb-dd92-46f5-86d8-97ef42450e83",
        category: "operatingsystems",
        wordTranslations: {
          en: "Rodeomad",
          pl: "Medcom"
        },
        status: "unknown"
      },
      {
        id: "340fba11-ebfc-407e-ab87-41b6259e986d",
        category: "operatingsystems",
        wordTranslations: {
          en: "Billmed",
          pl: "Gonkle"
        },
        status: "unknown"
      },
      {
        id: "2f86cf83-e6ac-4980-aced-8dc0fdf7d412",
        category: "operatingsystems",
        wordTranslations: {
          en: "Roboid",
          pl: "Dyno"
        },
        status: "mastered"
      },
      {
        id: "c09aa860-bd9e-4f70-962d-8122267fec77",
        category: "operatingsystems",
        wordTranslations: {
          en: "Vortexaco",
          pl: "Isoternia"
        },
        status: "unknown"
      },
      {
        id: "a849e835-1d63-4409-b2a4-5f483361080f",
        category: "operatingsystems",
        wordTranslations: {
          en: "Bostonic",
          pl: "Uplinx"
        },
        status: "mastered"
      },
      {
        id: "5defc2d8-6900-4f74-a9f9-b8f12730e24d",
        category: "operatingsystems",
        wordTranslations: {
          en: "Golistic",
          pl: "Pyramia"
        },
        status: "unknown"
      },
      {
        id: "fd5a8e4d-b4d3-4a58-a420-b6216a78aae0",
        category: "operatingsystems",
        wordTranslations: {
          en: "Conferia",
          pl: "Brainquil"
        },
        status: "mastered"
      },
      {
        id: "64dcf293-8253-48af-9e4c-dc6d027c5c70",
        category: "operatingsystems",
        wordTranslations: {
          en: "Geoform",
          pl: "Fuelworks"
        },
        status: "unknown"
      },
      {
        id: "91e55d3d-3f5b-49ec-a9e5-ca41690c2181",
        category: "operatingsystems",
        wordTranslations: {
          en: "Cuizine",
          pl: "Kenegy"
        },
        status: "mastered"
      },
      {
        id: "31bd2d3f-8fa0-496d-a66f-cbe04576b558",
        category: "operatingsystems",
        wordTranslations: {
          en: "Kindaloo",
          pl: "Oatfarm"
        },
        status: "learned"
      },
      {
        id: "3da539d6-c8fc-4637-a1cb-56a6d89f0648",
        category: "operatingsystems",
        wordTranslations: {
          en: "Enersave",
          pl: "Prismatic"
        },
        status: "unknown"
      },
      {
        id: "40bc3107-608b-460b-9de6-0421851c0a37",
        category: "operatingsystems",
        wordTranslations: {
          en: "Comvoy",
          pl: "Balooba"
        },
        status: "unknown"
      },
      {
        id: "861d9c83-e72a-402b-9437-ebd68a76cb33",
        category: "operatingsystems",
        wordTranslations: {
          en: "Senmao",
          pl: "Papricut"
        },
        status: "learned"
      },
      {
        id: "1f9f3eef-38cf-4e61-a148-95c7021f686f",
        category: "operatingsystems",
        wordTranslations: {
          en: "Cujo",
          pl: "Exoplode"
        },
        status: "unknown"
      },
      {
        id: "b7fea1c4-491a-40b1-b3bf-56b26f848384",
        category: "operatingsystems",
        wordTranslations: {
          en: "Virva",
          pl: "Cormoran"
        },
        status: "unknown"
      },
      {
        id: "bbf56620-df28-4348-a00b-ac9ab4c24996",
        category: "operatingsystems",
        wordTranslations: {
          en: "Biflex",
          pl: "Isostream"
        },
        status: "mastered"
      },
      {
        id: "467bdf2c-6703-48f7-9a80-5ef8c2653798",
        category: "operatingsystems",
        wordTranslations: {
          en: "Portica",
          pl: "Cinesanct"
        },
        status: "learned"
      },
      {
        id: "5494c523-7f8e-4aa6-a615-e965ca10e051",
        category: "operatingsystems",
        wordTranslations: {
          en: "Xerex",
          pl: "Paprikut"
        },
        status: "mastered"
      },
      {
        id: "2253e394-e356-4787-b5f1-5c9c5386c658",
        category: "operatingsystems",
        wordTranslations: {
          en: "Lumbrex",
          pl: "Nebulean"
        },
        status: "learned"
      },
      {
        id: "c7d3b8dd-09e8-4ab6-b0aa-e09df43617f9",
        category: "operatingsystems",
        wordTranslations: {
          en: "Circum",
          pl: "Austech"
        },
        status: "learned"
      },
      {
        id: "33b3cfd0-cf7d-4437-95da-9143f64e7e4a",
        category: "operatingsystems",
        wordTranslations: {
          en: "Norali",
          pl: "Animalia"
        },
        status: "unknown"
      },
      {
        id: "80dab8b9-eb7f-45b9-a54a-17f3b6057444",
        category: "operatingsystems",
        wordTranslations: {
          en: "Digique",
          pl: "Fossiel"
        },
        status: "learned"
      },
      {
        id: "3ed54d86-c34d-44f8-ba42-41c5d7648b04",
        category: "operatingsystems",
        wordTranslations: {
          en: "Apexia",
          pl: "Assurity"
        },
        status: "mastered"
      },
      {
        id: "14629c76-708c-43ef-9b8e-aa9b3e5d5015",
        category: "operatingsystems",
        wordTranslations: {
          en: "Ecrater",
          pl: "Isosphere"
        },
        status: "unknown"
      },
      {
        id: "d0482489-3ca3-4afa-af32-2a713c3a3e5c",
        category: "operatingsystems",
        wordTranslations: {
          en: "Combogene",
          pl: "Furnigeer"
        },
        status: "learned"
      },
      {
        id: "8be058ad-5b03-4bc6-9496-30a4db609e17",
        category: "operatingsystems",
        wordTranslations: {
          en: "Isologix",
          pl: "Artiq"
        },
        status: "unknown"
      },
      {
        id: "08f75b9f-7f33-4a9b-9699-8c222e46efb9",
        category: "operatingsystems",
        wordTranslations: {
          en: "Norsul",
          pl: "Velity"
        },
        status: "mastered"
      },
      {
        id: "d22d02b3-f136-4d62-8e48-7e4988c665b2",
        category: "operatingsystems",
        wordTranslations: {
          en: "Signity",
          pl: "Grainspot"
        },
        status: "unknown"
      },
      {
        id: "19888e29-3e80-46e9-8762-9f0eebadfb88",
        category: "operatingsystems",
        wordTranslations: {
          en: "Equicom",
          pl: "Imant"
        },
        status: "learned"
      },
      {
        id: "e5b5301b-5914-42ce-ade6-98cc8854d632",
        category: "operatingsystems",
        wordTranslations: {
          en: "Isotronic",
          pl: "Hometown"
        },
        status: "mastered"
      }
    ],
    languagesChosen: {
      from: "pl",
      to: "en"
    },
    user: {
      isLoggedIn: false,
      username: undefined,
      display_name: undefined
    },
    dialog: {
      isVisible: false,
      header: "",
      text: ""
    }
  },
  getters: {
    getWordsByCategory: state => category => {
      return category === "all"
        ? state.words.sort(
            (a, b) => a.wordTranslations.en - b.wordTranslations.en
          )
        : state.words.filter(word => word.category === category);
    },
    getAmountOfWordStatus: state => status => {
      return state.words.filter(word => word.status === status).length;
    },
    getAmountOfWordStatusCategory: state => (status, category) => {
      return state.words
        .filter(word => word.category === category)
        .filter(word => word.status === status).length;
    },
    getCategories: state => {
      return Array.from(
        new Set(state.words.map(value => (value = value.category)))
      );
    }
  },
  mutations: {
    ADD_CARD(state, payload) {
      Vue.set(state.words, state.words.length, payload);
    },
    MODIFY_CARD(state, payload) {
      const card = payload;
      const indexOfModifiedCard = state.words.findIndex(
        card => card.id === payload.id
      );
      const cardBeforeMod = state.words[indexOfModifiedCard];
      Vue.set(state.words, indexOfModifiedCard, {
        ...cardBeforeMod,
        ...card
      });
    },
    REMOVE_CARD(state, payload) {
      Vue.delete(
        state.words,
        state.words.findIndex(card => card.id === payload)
      );
    },
    CYCLE_STATUS(state, payload) {
      const CURRENT_STATUS =
        state.words[state.words.findIndex(card => card.id === payload.id)]
          .status;
      let statusID = LEARNING_STATUS.findIndex(
        status => status === CURRENT_STATUS
      );
      Vue.set(
        state.words,
        state.words.findIndex(card => card.id === payload.id),
        {
          ...state.words[state.words.findIndex(card => card.id === payload.id)],
          status: LEARNING_STATUS[(statusID + 1) % LEARNING_STATUS.length]
        }
      );
    },
    SET_USER_USERNAME(state, payload) {
      console.log(payload);
      state.user.username = payload;
    },
    SET_USER_DISPLAY_NAME(state, payload) {
      console.log(payload);
      state.user.display_name = payload;
    },
    SET_USER_LOGGED_IN(state, payload) {
      state.user.isLoggedIn = payload;
    },
    SET_DIALOG_VISIBILITY(state, payload) {
      state.dialog.isVisible = payload;
    },
    SET_DIALOG_HEADER(state, payload) {
      state.dialog.header = payload;
    },
    SET_DIALOG_TEXT(state, payload) {
      state.dialog.text = payload;
    }
  },
  actions: {
    async logIn({ commit, dispatch }, payload) {
      try {
        let response = await post("http://localhost/api/login.php", payload, {
          withCredentials: true
        });
        let { username, display_name } = response.data.user_info;
        if (response.data.response === "log_in_success") {
          commit("SET_USER_USERNAME", username);
          commit("SET_USER_DISPLAY_NAME", display_name);
          commit("SET_USER_LOGGED_IN", true);
          dispatch("showDialog", {
            time: 3,
            header: "Logged in.",
            text: `Logged in as ${username}.`
          });
        }
      } catch (error) {
        commit("SET_USER_LOGGED_IN", false);
        dispatch("showDialog", {
          time: 3,
          header: "Log in failed.",
          text: `Cause: ${JSON.stringify(error.response)}`
        });
      }
    },
    async showDialog({ commit }, payload) {
      commit("SET_DIALOG_VISIBILITY", true);
      commit("SET_DIALOG_HEADER", payload.header);
      commit("SET_DIALOG_TEXT", payload.text);
      setTimeout(() => {
        commit("SET_DIALOG_VISIBILITY", false);
        commit("SET_DIALOG_HEADER", "");
        commit("SET_DIALOG_TEXT", "");
      }, payload.time * MILISECONDS_IN_A_SECOND);
    },
    async getLoggedInData({ commit }) {
      let response = await get("http://localhost/api/get_user_info.php", {
        withCredentials: true
      });
      console.log(response);
      let { name, display_name } = response.data.user_info;
      commit("SET_USER_USERNAME", name);
      commit("SET_USER_DISPLAY_NAME", display_name);
      commit("SET_USER_LOGGED_IN", true);
    },
    async logOut({ commit, dispatch }) {
      try {
        let response = await get("http://localhost/api/logout.php", {
          withCredentials: true
        });
        console.log(response);
        if (response.data.response === "log_out_success") {
          commit("SET_USER_USERNAME", undefined);
          commit("SET_USER_DISPLAY_NAME", undefined);
          commit("SET_USER_LOGGED_IN", false);
          dispatch("showDialog", {
            time: 3,
            header: "Log out succeeded!"
          });
        }
      } catch (error) {
        dispatch("showDialog", {
          time: 3,
          header: "Log out failed.",
          text: `Cause: ${JSON.stringify(error.response)}`
        });
      }
    }
  },
  modules: {}
});
