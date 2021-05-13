import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colors } from '../../helpers/theme';
import { IChannel, IFeed } from '../../../types';

interface IProps {
  channel: IChannel;
  feeds: Array<IFeed>;
}

const LineGraph: React.FC<IProps> = ({ channel, feeds }) => {
  const [feedLabel, setFeedLabel] = useState<Array<string>>([]);
  const [temperatures, setTemperatures] = useState<Array<number>>([0]);
  const [humidity, setHumidity] = useState<Array<number>>([0]);

  function formatDate(date: string | Date) {
    date = new Date(date);
    let hora = date.getHours();
    let minutos = date.getMinutes();
    return `${hora}:${minutos}`;
  }

  useEffect(() => {
    (() => {
      feeds?.map((feed) => {
        if (feeds?.indexOf(feed) < 6) {
          setFeedLabel((previousState) => [
            ...previousState,
            formatDate(feed.created_at),
          ]);
          setTemperatures((prevState) => [...prevState, parseInt(feed.field1)]);
          setHumidity((prevState) => [...prevState, parseInt(feed.field2)]);
        }
      });
    })();
  }, [feeds]);

  return (
    <>
      <View style={{ marginBottom: 25 }}>
        <Text>Temperatura</Text>
      </View>
      <LineChart
        data={{
          // labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
          labels: feedLabel,
          datasets: [
            {
              data: temperatures && temperatures,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=''
        yAxisSuffix='º'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `${'orange'}`,
          labelColor: (opacity = 1) => `${colors.light.grayDark}`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '1',
            stroke: '#FFF',
          },
        }}
        bezier
        style={{
          marginVertical: 0,
          borderRadius: 16,
          alignSelf: 'center',
        }}
      />
      <View style={{ marginBottom: 25 }}>
        <Text>Umidade do ar</Text>
      </View>
      <LineChart
        data={{
          // labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
          labels: feedLabel,
          datasets: [
            {
              data: humidity && humidity,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=''
        yAxisSuffix='%'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `${'blue'}`,
          labelColor: (opacity = 1) => `${colors.light.grayDark}`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#FFF',
          },
        }}
        bezier
        style={{
          marginVertical: 0,
          borderRadius: 16,
          alignSelf: 'center',
        }}
      />
    </>
  );
};

export default LineGraph;
