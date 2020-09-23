import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListItem,
  FlatList,
} from 'react-native';
import TopTitle from '../part/topTitle';

const Items = (item) => {};

export default function NoticeList() {
  const [notice, setnotice] = useState([
    {
      key: '1',
      title: '2020년 2학기 장학증서 수여식 유튜브 생중계 안내',
      date: '2020-09-23',
    },
    {
      key: '2',
      title: '2020-2학기 수업교재 온라인구입 안내',
      date: '2020-08-20',
    },
    {
      key: '3',
      title: '2020-2학기 대면/비대면 수업에 대한 안내',
      date: '2020-08-20',
    },
    {
      key: '4',
      title: '2020-2학기 등록금 추가납부기간 안내',
      date: '2020-08-20',
    },
    {
      key: '5',
      title: '2020-2학기 교양과목 수강포기서 제출 안내',
      date: '2020-08-19',
    },
    {key: '6', title: '2020-2학기 전공시간표 안내', date: '2020-08-19'},
    {key: '7', title: '2020-2학기 장학금 신청안내', date: '2020-08-17'},
    {
      key: '8',
      title: '하계방학에 따른 코로나19 방역대책 변경 안내',
      date: '2020-07-27	',
    },
    {key: '9', title: '2020년 1학기 전공심화학기 수업안내', date: '2020-07-27	'},
  ]);
  return (
    <View style={{flex: 1}}>
      <TopTitle title="공지사항"></TopTitle>
      <FlatList
        data={notice}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <Text style={styels.listItem}>{item.title}</Text>
              <Text style={{position: 'absolute', right: 0}}>{item.date}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styels = StyleSheet.create({
  title: {
    backgroundColor: '#2358A6',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
  },
});
