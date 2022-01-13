import React, { Component } from 'react';
import { AppDimens, FontSize, Spacing } from './Global.styles';

const SearhMemosBase = {
  children: [
    {
      marginBottom: 20,
      flexDirection: 'row',
      children: [
        { borderRadius: 10, width: 50, height: 50, marginRight: 20 },
        {
          marginTop: 2,
          children: [
            { width: 200, height: FontSize.inputText, marginBottom: 10 },
            { width: 100, height: FontSize.short },
          ],
        },
      ],
    },
    {
      marginBottom: 20,
      flexDirection: 'row',
      children: [
        { borderRadius: 10, width: 50, height: 50, marginRight: 20 },
        {
          marginTop: 2,
          children: [
            { width: 250, height: FontSize.inputText, marginBottom: 10 },
            { width: 100, height: FontSize.short },
          ],
        },
      ],
    },
    {
      marginBottom: 20,
      flexDirection: 'row',
      children: [
        { borderRadius: 10, width: 50, height: 50, marginRight: 20 },
        {
          marginTop: 2,
          children: [
            { width: 150, height: FontSize.inputText, marginBottom: 10 },
            { width: 100, height: FontSize.short },
          ],
        },
      ],
    },
  ],
};

const MemoChipList = {
  children: [
    {
      width: 120,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 200,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 250,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 210,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
  ],
};

const MemoChipListDesign2 = {
  children: [
    {
      width: 250,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 200,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 280,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
    {
      width: 300,
      height: 35,
      borderRadius: 20,
      marginBottom: 15,
    },
  ],
};

const TrendingRow = [
  {
    children: [
      {
        flexDirection: 'row',
        children: [
          {
            width: 50,
            height: 50,
            marginRight: 16,
          },
          {
            children: [
              {
                width: 100,
                height: 20,
                marginBottom: 20,
              },
              {
                width: 160,
                height: 10,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    width: 200,
    height: 2,
    marginVertical: 50,
  },
];
export const Skeletons = {
  searchMemos: new Array(4).fill(SearhMemosBase),
  MemoChipList,
  MemoChipListDesign2,

  trendingList: {
    children: TrendingRow,
  },

  MemoStatView: {
    children: [
      {
        width: 200,
        height: 20,
      },
      {
        marginTop: 10,
        width: 100,
        height: 20,
      },
      {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        children: new Array(4).fill({
          width: 50,
          height: 50,
          borderRadius: 10,
        }),
      },
      {
        alignSelf: 'center',
        width: 200,
        height: 2,
        marginVertical: 40,
      },
    ],
  },
  timeline: [
    {
      marginHorizontal: Spacing.large,
      key: 'someId1',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      children: [
        {
          flexDirection: 'row',
          children: [
            {
              width: 50,
              height: 50,
              borderRadius: 25,
            },
            {
              marginLeft: 20,
              children: [
                {
                  width: 100,
                  height: FontSize.inputText,
                  borderRadius: 5,
                  marginBottom: 10,
                },
                {
                  width: 60,
                  height: FontSize.medium,
                  borderRadius: 5,
                },
              ],
            },
          ],
        },
        {
          height: 40,
          width: 10,
        },
      ],
    },
    // {
    //   marginTop: 20,
    //   marginHorizontal: Spacing.large,
    //   width: 150,
    //   height: 20,
    //   borderRadius: 5,
    // },
    {
      marginVertical: 30,
      alignSelf: 'center',
      height: 200,
      width: 200,
      borderRadius: 30,
    },
    {
      flexDirection: 'row',

      children: [
        {
          height: 50,
          width: 50,
          borderRadius: 10,
          marginLeft: Spacing.large,
        },
        {
          height: 50,
          width: 50,
          borderRadius: 10,
          marginLeft: Spacing.large,
        },
        {
          height: 50,
          width: 50,
          borderRadius: 10,
          marginLeft: Spacing.large,
        },
        {
          height: 50,
          width: 50,
          borderRadius: 10,
          marginLeft: Spacing.large,
        },
      ],
    },
  ],
  // USER PROFILE
  userprofilepage: [
    {
      width: 100,
      height: 30,
      borderRadius: 10,
      marginBottom: 20,
    },
    {
      flexDirection: 'row',
      children: new Array(5).fill({
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 30,
      }),
    },
    {
      marginTop: 50,
      width: 100,
      height: 30,
      borderRadius: 10,
      marginBottom: 20,
    },
    {
      width: 200,
      height: 30,
      borderRadius: 25,
      marginBottom: 20,
    },
    {
      width: 230,
      height: 30,
      borderRadius: 25,
      marginBottom: 20,
    },
    {
      width: 300,
      height: 30,
      borderRadius: 25,
      marginBottom: 20,
    },
    {
      width: 250,
      height: 30,
      borderRadius: 25,
      marginBottom: 20,
    },
  ],
  radioButton: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    children: [
      {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 20,
      },
      {
        width: 200,
        height: 30,
      },
    ],
  },

  Advertisements: [
    {
      alignSelf: 'center',
      marginHorizontal: 16,
      width: AppDimens.width * 0.8,
      borderRadius: 10,
      height: 170,
    },
    {
      marginTop: 16,
      alignSelf: 'center',
      marginHorizontal: 16,
      width: AppDimens.width * 0.8,
      borderRadius: 10,
      height: 20,
    },
    {
      marginTop: 16,
      marginHorizontal: 35,
      alignSelf: 'flex-start',
      width: AppDimens.width * 0.3,
      borderRadius: 10,
      height: 20,
    },
  ],
  placesView: {
    marginBottom: 20,
    children: [
      {
        width: '20%',
        height: 20,
        marginBottom: 10,
      },
      {
        width: '80%',
        height: 15,
      },
    ],
  },

  NearbyContacts: {
    flexDirection: 'row',
    children: Array(10).fill({
      marginLeft: 20,
      children: [
        {
          width: 60,
          height: 60,
          borderRadius: 30,
          marginBottom: 10,
        },
        {
          width: 60,
          height: 20,
          borderRadius: 5,
          marginBottom: 10,
        },
      ],
    }),
  },

  contactView: {
    flexDirection: 'row',
    marginBottom: 30,

    children: [
      {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      {
        width: '80%',
        height: 40,
      },
    ],
  },

  RequestsItem: {
    flexDirection: 'row',
    marginBottom: 30,
    marginHorizontal: 8,
    justifyContent: 'space-between',
    children: [
      {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      {
        flexDirection: 'column',
        marginRight: 20,
        children: [
          { width: 200, height: 20, marginBottom: 10 },
          { width: 100, height: 20 },
        ],
      },
      {
        width: 50,
        height: 50,
        borderRadius: 10,
      },
      // {
      //   width: '80%',
      //   height: 40,
      // },
    ],
  },

  PhotoGrid: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    children: [
      {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginHorizontal: 2,
      },
      {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginHorizontal: 2,
      },
      {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginHorizontal: 2,
      },
    ],
  },

  simplelist: {
    // flexDirection: 'row',
    marginBottom: 30,
    children: [
      {
        width: '100%',
        height: 40,
      },
    ],
  },
};
