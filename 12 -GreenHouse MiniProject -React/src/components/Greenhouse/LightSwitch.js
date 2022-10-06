import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div className={themeName == 'day' ? 'on' : 'off'} onClick={() => setThemeName('day')}>DAY</div>
      <div className={themeName == 'night' ? 'on' : 'off'} onClick={() => setThemeName('night')}>NIGHT</div>
    </div>
  );
} 

export default LightSwitch;