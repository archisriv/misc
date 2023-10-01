function i(e){window.enmity.plugins.registerPlugin(e)}function t(e){return window.enmity.patcher.create(e)}var s="ew",c="1.0.0",p="ew ew ewwww ughhhj yuck",a=[{name:"55515",id:"1087038981667041320"}],m="#FFFFFF",u={name:s,version:c,description:p,authors:a,color:m};import { Plugin, registerPlugin } from 'enmity/managers/plugins'
import manifest from '../manifest.json'
import { getByProps } from "enmity/modules"

// finally figured getbyprops out
const icons = getByProps("OFFICIAL_ALTERNATE_ICONS")
const iconsIds = getByProps("FreemiumAppIconIds")
const alternateIcons = icons.OFFICIAL_ALTERNATE_ICONS();
const origFreemiumAppIconIds = iconsIds.FreemiumAppIconIds;

const FreeAppIcons: Plugin = {
    ...manifest,

//  when the app starts make the icons free for all/each of them
    onStart() {
        alternateIcons.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = false));
        icons.ICON.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = false));
        iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;
    },

// unpach it all on stop   
    onStop() {
       alternateIcons.forEach(icon => icon.isPremium = (icon._isPremium ?? false));
       icons.ICON.forEach(icon => icon.isPremium = (icon._isPremium ?? false));
       iconsIds.FreemiumAppIconIds = origFreemiumAppIconIds;
    }
 };
 
 registerPlugin(FreeAppIcons);