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
      img: '/avatars/amanda.png',
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
  {
    id: '4a5s45djhas1d45w45',
    name: 'Johannes',
    color: 'violet',
    avatar: {
      name: 'GT',
      img: '/avatars/johannes.png',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54weda57f4s5dfhywnm',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'sdf54w588w457s5dfhywnm',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'sdf54we68yti4s5dfhywnm',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54wesfsfrf5ftds2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we45a5f475ftdsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'sdf54weda57f4s5ftdsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          // {
          //   id: 'sdf54w588w457s5ftdsz2',
          //   lesson: 'maantieto',
          //   start: { time: '10:45', position: 4300 },
          //   end: { time: '11:30', position: 4600 },
          // },
          {
            id: 'sdf54we68yti4s5ftd546',
            lesson: 'liikunta',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'sdf54we64gjo4s5ftdsyt',
            lesson: 'liikunta',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'sdf54we64gj4fh5ftds2t',
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
            id: '54e4t7s5ja5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '54edt7s5j57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '5458t7s5jw457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          // {
          //   id: '54e6t7s5jyti4s5d4f546',
          //   lesson: 'tietotekniikka',
          //   start: { time: '12:30', position: 5000 },
          //   end: { time: '13:15', position: 5300 },
          // },
          {
            id: '54e6t7s5jgjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'f4we6gj4h8fnt5s84fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          // {
          //   id: 'f4we3mnfs8fnt5sd8fsj3',
          //   lesson: 'tietotekniikka',
          //   start: { time: '08:10', position: 3266 },
          //   end: { time: '09:00', position: 3600 },
          // },
          // {
          //   id: 'f4we4a5f78fnt5sd4fsl7',
          //   lesson: 'äidinkieli',
          //   start: { time: '09:00', position: 3600 },
          //   end: { time: '09:45', position: 3900 },
          // },
          {
            id: 'f4wed57fs8fnt5sd4fsd4',
            lesson: 'äidinkieli',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'f4w58w45s8fnt5sd4fsz2',
            lesson: 'matemattikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'f4we6ytis8fnt5sd4f546',
            lesson: 'oppilaanohjaus',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'f4we6gjos8fnt5s84fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'f4we6gj4fsernt5s84fs2t',
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
            id: 'f5r7nwe39mnf4s5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'f5r7nwe45a5f475d4fsl7',
            lesson: 'maantieto',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'f5r7nweda57f4s5d4fsd4',
            lesson: 'tietotekniikka',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'f5r7nw588w457s5d4fsz2',
            lesson: 'tietotekniikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'f5r7nwe68yti4s5d4f546',
            lesson: 'englanti',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
        ],
      },
    ],
  },
  {
    id: 'sfa5sfkt2as1d45whf',
    name: 'Jekky',
    color: 'pink',
    avatar: {
      name: 'JE',
      img: '/avatar/jekky.png',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: '754we39mnfsr5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: 'tdf54were57ffw5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'tdf54w5rew45fw5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'tdf54wereytifw5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'tdf54weregjofw784fsyt',
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
            id: '57ef4wedfa5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '57ef4wedf57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '57ef4w5dfw457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '57ef4wedfyti4s5d4f546',
            lesson: 'liikunta',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '57ef4wedfgjo4s784fsyt',
            lesson: 'liikunta',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: '57ef4wedfgj4fh784fs2t',
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
            id: '47rsdwe45a5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '47rsdweda57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '47rsdw588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '47rsdwe68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '47rsdwe64gjo4s784fsyt',
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
            id: '84tsdwe39mnf4s5d8fsj3',
            lesson: 'tietotekniikka',
            start: { time: '08:10', position: 3266 },
            end: { time: '09:00', position: 3600 },
          },
          // {
          //   id: '84tsdwe45a5f475d4fsl7',
          //   lesson: 'äidinkieli',
          //   start: { time: '09:00', position: 3600 },
          //   end: { time: '09:45', position: 3900 },
          // },
          {
            id: '84tsdweda57f4s5d4fsd4',
            lesson: 'äidinkieli',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '84tsdw588w457s5d4fsz2',
            lesson: 'matemattikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '84tsdwe68yti4s5d4f546',
            lesson: 'oppilaanohjaus',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '84tsdwe64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: '7gn5dwe39mnf4s5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: '7gn5dwe45a5f475d4fsl7',
            lesson: 'maantieto',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '7gn5dweda57f4s5d4fsd4',
            lesson: 'tietotekniikka',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '7gn5dw588w457s5d4fsz2',
            lesson: 'tietotekniikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '7gn5dwe68yti4s5d4f546',
            lesson: 'englanti',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '84tsdwe64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
    ],
  },
  {
    id: '75dh45d2as1d45whf',
    name: 'Romario',
    color: 'brown',
    avatar: {
      name: 'RM',
      img: '/avatar/romario.png',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: '78ftweda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '78ftw588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '78ftwe68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '78ftwe64gjo4s784fsyt',
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
            id: 'yrn76we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'yrn76weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'yrn76w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          // {
          //   id: 'yrn76we68yti4s5d4f546',
          //   lesson: 'liikunta',
          //   start: { time: '12:30', position: 5000 },
          //   end: { time: '13:15', position: 5300 },
          // },
          {
            id: 'yrn76we64gjo4s784fsyt',
            lesson: 'liikunta',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: 'yrn76we64gj4fh784fs2t',
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
            id: '8tmhswe39mnf4s5d8fsj3',
            lesson: 'tietotekniikka',
            start: { time: '08:10', position: 3266 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: '8tmhswe45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '8tmhsweda57f4s5d4fsd4',
            lesson: 'äidinkieli',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '8tmhsw588w457s5d4fsz2',
            lesson: 'matemattikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '8tmhswe68yti4s5d4f546',
            lesson: 'oppilaanohjaus',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '8tmhswe64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: '8tmhswe64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15', position: 5700 },
            end: { time: '15:00', position: 6000 },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: '7fmkwe45a5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '7fmkweda57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '7fmkw588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '7fmkwe68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '7fmkwe64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          // {
          //   id: '7sendwe39mnf4s5d8fsj3',
          //   lesson: 'maantieto',
          //   start: { time: '08:15', position: 3300 },
          //   end: { time: '09:00', position: 3600 },
          // },
          {
            id: '7sendwe45a5f475d4fsl7',
            lesson: 'maantieto',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '7sendweda57f4s5d4fsd4',
            lesson: 'tietotekniikka',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '7sendw588w457s5d4fsz2',
            lesson: 'tietotekniikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '7sendwe68yti4s5d4f546',
            lesson: 'englanti',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d45whf',
    name: 'Rosalitta',
    color: 'blue',
    avatar: {
      name: 'RS',
      img: '/avatar/rosalitta.png',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: '7hfrwe39mnf4s5d8fsj3',
            lesson: 'maantieto',
            start: { time: '08:15', position: 3300 },
            end: { time: '09:00', position: 3600 },
          },
          {
            id: '7hfrwe45a5f475d4fsl7',
            lesson: 'maantieto',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: '7hfrweda57f4s5d4fsd4',
            lesson: 'tietotekniikka',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: '7hfrw588w457s5d4fsz2',
            lesson: 'tietotekniikka',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: '7hfrwe68yti4s5d4f546',
            lesson: 'englanti',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'fh37we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'fh37weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'fh37w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          // {
          //   id: 'fh37we68yti4s5d4f546',
          //   lesson: 'liikunta',
          //   start: { time: '12:30', position: 5000 },
          //   end: { time: '13:15', position: 5300 },
          // },
          // {
          //   id: 'fh37we64gjo4s784fsyt',
          //   lesson: 'liikunta',
          //   start: { time: '13:15', position: 5300 },
          //   end: { time: '14:00', position: 5600 },
          // },
          // {
          //   id: 'fh37we64gj4fh784fs2t',
          //   lesson: 'matemattikka',
          //   start: { time: '14:15', position: 5700 },
          //   end: { time: '15:00', position: 6000 },
          // },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'fh87rwe45a5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '09:00', position: 3600 },
            end: { time: '09:45', position: 3900 },
          },
          {
            id: 'fh87rweda57f4s5d4fsd4',
            lesson: 'englanti',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'fh87rw588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'fh87rwe68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'fh87rwe64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          // {
          //   id: '58jg539mnf4s5d8fsj3',
          //   lesson: 'tietotekniikka',
          //   start: { time: '08:10', position: 3266 },
          //   end: { time: '09:00', position: 3600 },
          // },
          // {
          //   id: '58jg545a5f475d4fsl7',
          //   lesson: 'äidinkieli',
          //   start: { time: '09:00', position: 3600 },
          //   end: { time: '09:45', position: 3900 },
          // },
          // {
          //   id: '58jg5da57f4s5d4fsd4',
          //   lesson: 'äidinkieli',
          //   start: { time: '10:00', position: 4000 },
          //   end: { time: '10:45', position: 4300 },
          // },
          // {
          //   id: 'sdf54w588w457s5d4fsz2',
          //   lesson: 'matemattikka',
          //   start: { time: '10:45', position: 4300 },
          //   end: { time: '11:30', position: 4600 },
          // },
          {
            id: '58jg568yti4s5d4f546',
            lesson: 'oppilaanohjaus',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: '58jg564gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
          {
            id: '58jg564gj4fh784fs2t',
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
            id: 'dfur0weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00', position: 4000 },
            end: { time: '10:45', position: 4300 },
          },
          {
            id: 'dfur0w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45', position: 4300 },
            end: { time: '11:30', position: 4600 },
          },
          {
            id: 'dfur0we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30', position: 5000 },
            end: { time: '13:15', position: 5300 },
          },
          {
            id: 'dfur0we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15', position: 5300 },
            end: { time: '14:00', position: 5600 },
          },
        ],
      },
    ],
  },
];
