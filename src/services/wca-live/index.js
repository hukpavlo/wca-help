const request = require('../../helpers/request');
const { WCA_LIVE_BASE_URL } = require('../../const');

module.exports.getCompetitions = async () => {
  const query = `
    query Competitions {
      competitions {
        upcoming {
          ...competitionInfo
        }
        inProgress {
          ...competitionInfo
        }
      }
    }
  
    fragment competitionInfo on Competition {
      id
      name
      countries {
        iso2
      }
    }
  `;

  const response = await request({
    url: `${WCA_LIVE_BASE_URL}/api`,
    method: 'POST',
    data: { query },
  });

  return response.data;
};

// {
//   "data": {
//     "competitions": {
//       "upcoming": [
//         {
//           "id": "PikesPeakBigandBlind2020",
//           "name": "Pikes Peak Big and Blind 2020",
//           "countries": [
//             {
//               "iso2": "US"
//             }
//           ]
//         },
//         {
//           "id": "SiouxFallsSpring2020",
//           "name": "Sioux Falls Spring 2020",
//           "countries": [
//             {
//               "iso2": "US"
//             }
//           ]
//         },
//         {
//           "id": "USMPenangCube2020",
//           "name": "USM Penang Cube 2020",
//           "countries": [
//             {
//               "iso2": "MY"
//             }
//           ]
//         },
//         {
//           "id": "BoholOpen2020",
//           "name": "Bohol Open 2020",
//           "countries": [
//             {
//               "iso2": "PH"
//             }
//           ]
//         },
//         {
//           "id": "SwedishBlindQualification2020",
//           "name": "Swedish Blind Qualification 2020",
//           "countries": [
//             {
//               "iso2": "SE"
//             }
//           ]
//         },
//         {
//           "id": "MinnesotaCubeMelt2020",
//           "name": "Minnesota Cube Melt 2020",
//           "countries": [
//             {
//               "iso2": "US"
//             }
//           ]
//         },
//         {
//           "id": "SwedishChampionship2020",
//           "name": "Swedish Championship 2020",
//           "countries": [
//             {
//               "iso2": "SE"
//             }
//           ]
//         },
//         {
//           "id": "CCFCSpring2020",
//           "name": "CCFC Spring 2020",
//           "countries": [
//             {
//               "iso2": "US"
//             }
//           ]
//         },
//         {
//           "id": "SummitCubeDay2020",
//           "name": "Summit Cube Day 2020",
//           "countries": [
//             {
//               "iso2": "US"
//             }
//           ]
//         }
//       ],
//       "inProgress": [
//         {
//           "id": "SelangorAceCube2020",
//           "name": "Selangor Ace Cube 2020",
//           "countries": [
//             {
//               "iso2": "MY"
//             }
//           ]
//         }
//       ]
//     }
//   }
// }