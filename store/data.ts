import { Schedule } from '@Types';
export const testdata: Array<Schedule> = [
  {
    id: '0.9335517954352719',
    name: 'Emilia',
    color: 'pink',
    avatar: {
      img: '/avatars/emilia.png',
      name: 'Em',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'äidinkieli',
            start: { time: '08:10', position: 3266 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'liikunta',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'liikunta',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'englanti',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'äidinkieli',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'äidinkieli',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'äidinkieli',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'biologia',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d45whf',
    name: 'Amanda',
    color: 'green',
    avatar: {
      name: 'AM',
      img: '',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'liikunta',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'liikunta',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'tietotekniikka',
            start: { time: '08:10', position: 3266 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'äidinkieli',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'matemattikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'oppilaanohjaus',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'maantieto',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'tietotekniikka',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'tietotekniikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'englanti',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
        ],
      },
    ],
  },
];
