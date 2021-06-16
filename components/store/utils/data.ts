import { Schedule } from '@types';
export const database: Array<Schedule> = [
  {
    id: '4a5s45d2as1d45we5',
    name: 'Johannes',
    colors: {
      accent: 'brown',
      shade: 'brown_shade',
    },
    avatar: {
      img: 'url',
      name: 'JO',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54we39mnf4s5d8fsj3',
            lesson: 'äidinkieli',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we45a5f475d4fsl7',
            lesson: 'äidinkieli',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54weda57f4s5d4fsd4',
            lesson: 'oppilaanohjaus',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w588w457s5d4fsz2',
            lesson: 'maantieto',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we68yti4s5d4f546',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54we64gjo4s784fsyt',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54we64gj4fh784fs2t',
            lesson: 'matemattikka',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
          // {
          //   id: 'sdf54ftkojo4s784fsyu',
          //   lesson: 'matemattikka',
          //   time: { start: '15:00', end: '16:00' },
          // },
          // {
          //   id: 'sdf54we64gjo4solfr04',
          //   lesson: 'tietotekniikka',
          //   time: { start: '16:00', end: '17:00' },
          // },
          // {
          //   id: 'sdf54we64gjo4sosfr07',
          //   lesson: 'liikunta',
          //   time: { start: '17:00', end: '18:00' },
          // },
          // {
          //   id: 'sdf54we64gjo4s78dadg',
          //   lesson: 'liikunta',
          //   time: { start: '18:00', end: '19:00' },
          // },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fsj3',
            lesson: 'biologia',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fsl7',
            lesson: 'matemattikka',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we6da5f4s5d4fsd4',
            lesson: 'liikunta',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sd456aw58w5f4s5d4fsz2',
            lesson: 'liikunta',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we68ytiad5d4fsu6',
            lesson: 'kuvaamataito',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54we64gjo4sad4fsyt',
            lesson: 'kuvaamataito',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54we57h5f4s5d4fs15',
            lesson: 'fyssikka',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54we4875f4s5d8fsj3',
            lesson: 'englanti',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we785wf475d4fsl7',
            lesson: 'tietotekniikka',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54wdhbw5f4s5d4fsd4',
            lesson: 'ruotsi',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w58pn4t4s5d4fsz2',
            lesson: 'ruotsi',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 's4554we68yti4s5d4fsu6',
            lesson: 'historia',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf547864gjo4s5d4fsyt',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf5fgr68w5f475d4fsl7',
            lesson: 'fysiikka',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf5dadefw5f4s5d4fsd4',
            lesson: 'matemattikka',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w58ln55ms5d4fsz2',
            lesson: 'englanti',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we68yti4s5d4fsu6',
            lesson: 'kuvaamataito',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54we64gjo4s5d4fsyt',
            lesson: 'maantieto',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we87s5f4s5d8fsj3',
            lesson: 'uskonto',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54wuy4w5f475d4fsl7',
            lesson: 'anatomia',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54wedaeff4s5d4fsd4',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w588f4s5dszmn54b',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we6kjti4s5d4fsu6',
            lesson: 'kuvaamataito',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d45whf',
    name: 'Amanda',
    colors: {
      accent: 'green',
      shade: 'green_shade',
    },
    avatar: {
      img: 'url',
      name: 'AM',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54w588w5f4s5d4fs11',
            lesson: 'oppilaanohjaus',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68yti4s5d4fs0f',
            lesson: 'englanti',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we64gjo4s5d4fss2',
            lesson: 'biologia',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we45nwf4s5d8fsy6',
            lesson: 'uskonto',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fsi8',
            lesson: 'uskonto',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5f4s5d4fs8k',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w588daf4s5d4fs11',
            lesson: 'englanti',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we9ad4i4s5d4fs0f',
            lesson: 'kemia',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54wasdjo4s5d4fss2',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54ww68w5fsf5d8fsy6',
            lesson: 'uskonto',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fsi8',
            lesson: 'uskonto',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5f4s5d4fs8k',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54wd4eq454s5d4fs11',
            lesson: 'englanti',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'saddaw68yti4s5d4fs0f',
            lesson: 'kemia',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'dadlhejhqjkhkdabwas4d',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54we68w5f45ed8fsy6',
            lesson: 'uskonto',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fsi8',
            lesson: 'uskonto',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5f4s5d4fs8k',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54wada45f4s5d4fs11',
            lesson: 'englanti',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54wad54yti48d4fs0f',
            lesson: 'kemia',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54we64gjo4s5daeqe2',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we68j3n4s5d8fsy6',
            lesson: 'uskonto',
            start: { time: '8:15' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fsi8',
            lesson: 'uskonto',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5f4s5d4fs8k',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54wada45f4s5d4fs11',
            lesson: 'englanti',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we68yadds5d4fs0f',
            lesson: 'kemia',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54we64gade45d4fss2',
            lesson: 'oppilaanohjaus',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d455hj',
    name: 'Emilia',
    colors: {
      accent: 'pink',
      shade: 'pink_shade',
    },
    avatar: {
      img: 'url',
      name: 'EM',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fssw',
            lesson: 'maantieto',
            start: { time: '8:10' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fs3g',
            lesson: 'oppilaanohjaus',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fssw',
            lesson: 'maantieto',
            start: { time: '8:10' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fs3g',
            lesson: 'oppilaanohjaus',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fssw',
            lesson: 'maantieto',
            start: { time: '8:10' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fs3g',
            lesson: 'oppilaanohjaus',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fssw',
            lesson: 'maantieto',
            start: { time: '8:10' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fs3g',
            lesson: 'oppilaanohjaus',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8fssw',
            lesson: 'maantieto',
            start: { time: '8:10' },
            end: { time: '9:00' },
          },
          {
            id: 'sdf54we68w5f475d4fs3g',
            lesson: 'oppilaanohjaus',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d45rhb',
    name: 'Olivia',
    colors: {
      accent: 'magenta',
      shade: 'magenta_shade',
    },
    avatar: {
      img: 'url',
      name: 'OL',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54we68wasdas5d8ftr',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we68w5f475d4fpb6',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we68w5f4s5d4fq6v',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54w58ad5f4s5d4f36f',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54wa38w5f43dfj4nmn',
            lesson: 'historia',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
          // {
          //   id: 'sdf54wa38wfsdjklhrwer',
          //   lesson: 'historia',
          //   time: { start: '15:00', end: '16:00' },
          // },
          // {
          //   id: 'sdf54wa38w5f4er54fs1f',
          //   lesson: 'historia',
          //   time: { start: '16:00', end: '17:00' },
          // },
          // {
          //   id: 'sdf54wa35sd4f6e4rsf4s',
          //   lesson: 'historia',
          //   time: { start: '17:00', end: '18:00' },
          // },
          // {
          //   id: 'sdf5ds4f654er45df7464',
          //   lesson: 'historia',
          //   time: { start: '18:00', end: '19:00' },
          // },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we68adf4s5d8ftrb',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we67waa475d4fpb6',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we47e2f4s5d4fq6v',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54w4ade5f4s5d4f36f',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54w5da8e14s5d4f36f',
            lesson: 'historia',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54we68w5f4s554etrb',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54w67a2f475d4fpb6',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'adadkm4d4ad47q2d1ad',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54wdad554s5d4f36f',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54w557ed4s5d4f36f',
            lesson: 'historia',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54weaasd54s5d8ftrb',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we68w5zcdd4fpb6',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54wa555f4s5d4fq6v',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf544d7e44s5d4f36f',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54w58w5f4s5da4e5',
            lesson: 'historia',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we68w5f4sqe5ftrb',
            lesson: 'kotitalous',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54wczc5f475d4fpb6',
            lesson: 'kotitalous',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54w78dw5f4s5d4fq6v',
            lesson: 'tietotekniikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
          {
            id: 'sdf54w5adw5f4s5d4f36f',
            lesson: 'kemia',
            start: { time: '13:15' },
            end: { time: '14:00' },
          },
          {
            id: 'sdf54w536d5f4s5d4f36f',
            lesson: 'historia',
            start: { time: '14:15' },
            end: { time: '15:00' },
          },
        ],
      },
    ],
  },
  {
    id: '4a5s45d2as1d45nvh',
    name: 'Mikael',
    colors: {
      accent: 'blue',
      shade: 'blue_shade',
    },
    avatar: {
      img: 'url',
      name: 'MI',
    },
    timetable: [
      {
        day: 'maanantai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5d8f77y',
            lesson: 'liikunta',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5f475d4fhj7',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we68w5e4s454fkjd',
            lesson: 'äidinkieli',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we6785f4s5d4fkjd',
            lesson: 'matemattikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
      {
        day: 'tiistai',
        lessons: [
          {
            id: 'sdf54we6d55f4s5d8f77y',
            lesson: 'liikunta',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54we68w5e475d4fhj7',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we68w5f4s5d4fkjd',
            lesson: 'äidinkieli',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf5gfe68w5f4s5d4fkjd',
            lesson: 'matemattikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
      {
        day: 'keskiviikko',
        lessons: [
          {
            id: 'sdf54wegdf5f4dyd8f77y',
            lesson: 'liikunta',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54wedfw5f475dwrhj7',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdfgfwe68w5f4s5d4fkjd',
            lesson: 'äidinkieli',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54wehru5f4s5d4fkjd',
            lesson: 'matemattikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
      {
        day: 'torstai',
        lessons: [
          {
            id: 'sdf54wenfl8f4s5d8f77y',
            lesson: 'liikunta',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54webxfwf475d4fhj7',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we15srf4s5d4grtm',
            lesson: 'äidinkieli',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54wems0rf4smulfkjd',
            lesson: 'matemattikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
      {
        day: 'perjantai',
        lessons: [
          {
            id: 'sdf54we68w5f4s5dsor7y',
            lesson: 'liikunta',
            start: { time: '9:00' },
            end: { time: '9:45' },
          },
          {
            id: 'sdf54weln68f475d4fhj7',
            lesson: 'äidinkieli',
            start: { time: '10:00' },
            end: { time: '10:45' },
          },
          {
            id: 'sdf54we68w5f4s25dmjjd',
            lesson: 'äidinkieli',
            start: { time: '10:45' },
            end: { time: '11:30' },
          },
          {
            id: 'sdf54we665mk!s5d4fkjd',
            lesson: 'matemattikka',
            start: { time: '12:30' },
            end: { time: '13:15' },
          },
        ],
      },
    ],
  },
];
