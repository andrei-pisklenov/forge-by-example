import ForgeUI, {
  MacroConfig,
  TextArea,
  render
} from '@forge/ui';

if (false) ForgeUI; // fix for "Cannot find name 'ForgeUI'" issue

export const ConfigUi = () => {
  return (
    <MacroConfig>
      <TextArea name="macroBody" label="Macro Body"></TextArea>
    </MacroConfig>
  );
};

export const config = render(<ConfigUi />);
