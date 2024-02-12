const getUnionIcon = (unionLevel) => {
    if (500 <= unionLevel && unionLevel < 1000) { // 노비스
        return 'https://i.namu.wiki/i/crA-vLgYU1uykPgESk5QaE8LdrgzK0Scbuy3b1YC3b0EIA3QlFsv-XjZupXKC-bFQPtcVvFqnTFk0nWeyNLbpQ.webp';
    } else if (1000 <= unionLevel && unionLevel < 1500) {
        return 'https://i.namu.wiki/i/1Zt4b6B-UyGNpN8U1juBIUJ4FJZwdCQ_7yMU5w67DSbezMqtwFEZ2B5i-YttrrERe0FkZ4gDCUJFoVGzrWokRw.webp';
    } else if (1500 <= unionLevel && unionLevel < 2000) {
        return 'https://i.namu.wiki/i/u59antbjYAHIWFamuAhftIkaru15r1hQ4-2Z92pBYV0NP0HWg6pjqKQ9zlN2MYgjiOOuAB03F0EicxrkC7NEkA.webp';
    } else if (2000 <= unionLevel && unionLevel < 2500) {
        return 'https://i.namu.wiki/i/6IjxBAKjZGB5Mo-dJo4UNn5gUppDfgU0fd6TgHh5zXtcHhfIPaXcNvwOxXmfDbaynJj4yqh5kLpiXXt6V1-1aA.webp';
    } else if (2500 <= unionLevel && unionLevel < 3000) {
        return 'https://i.namu.wiki/i/e1rwgUsmNeC3j-2XDk3T1nPT8Z_W7NHApppGxLRW7PKFekAnbTUlTOvwBhbRqlzJm4FTnuE5gVgm-2MJyJqvnA.webp';
    } else if (3000 <= unionLevel && unionLevel < 3500) { // 베테랑
        return 'https://i.namu.wiki/i/Wcusd0HPXYqQP0GBe__mAFD4aHkkeGIp8kqAgrcTaq-J-mIzCRIalMXtkF_Vl09kHl6oA8eF0XFGTIobTQwX5g.webp';
    } else if (3500 <= unionLevel && unionLevel < 4000) {
        return 'https://i.namu.wiki/i/YZWOAsioz94uNVVls1sjUvphzVv_syzvOIf4BgOvGxXny-55JaAlVlzH0enBgFf1wOidU5xpUO35jwXgwIyPBA.webp';
    } else if (4000 <= unionLevel && unionLevel < 4500) {
        return 'https://i.namu.wiki/i/nPRJIo2XW6Z7A8kGeYJExykjeC6BlN22-fsN8mCd3Oad_8JdvwBy1NT2ygZAJ9lQnGcHPKBIo2nu_Qc3-iq10Q.webp';
    } else if (4500 <= unionLevel && unionLevel < 5000) {
        return 'https://i.namu.wiki/i/OlOvjzeOoDRWGi64xbOjunJ1YCPrL__l7V1GyYFReJCH9xnaqpvHA91QpAJhQE_vxgrsd66HZ1TfUDf1n3aI0Q.webp';
    } else if (5000 <= unionLevel && unionLevel < 5500) {
        return 'https://i.namu.wiki/i/j5Yd81rF_J1-wuPvLNgZGVYo2BR2_1fNndL-1Rl-QrDBDhRA_9ze_tTKUjH7D5i-ojWnETYiNRUnf5RjLBuRww.webp';
    } else if (5500 <= unionLevel && unionLevel < 6000) { // 마스터
        return 'https://i.namu.wiki/i/sZlbtyYLQLB6Edc7I2CZygde_uu5ItwKrJLXbaVQm3xhQFX3WU6PmE-2_cSM8U0UyXRsrayC90HFX3jwm69dWg.webp';
    } else if (6000 <= unionLevel && unionLevel < 6500) {
        return 'https://i.namu.wiki/i/2eLm4WEFXwXvd3oHdE1LCh0FbaiNSaSIAKF9pGR-0eZBi5EykBJVSDKQQuJnvYLFmd0mnpq8ao7kaP1_pA6zEA.webp';
    } else if (6500 <= unionLevel && unionLevel < 7000) {
        return 'https://i.namu.wiki/i/bl5S1jJnqvmS22VWB5S2YnyxQU5E38NLNc_4SIpKwEyFVXp4CIDlq8RySNXLJMBCxlMptAKXpffea9URZ8NC5g.webp';
    } else if (7000 <= unionLevel && unionLevel < 7500) {
        return 'https://i.namu.wiki/i/iaEpRctGgTgSpc8dbqul1xFR6kUIdxdg2oejYU4ZHvDEHoGjBGstN3TVusX4gTcGui61tuBj93yx_YqJXZH95g.webp';
    } else if (7500 <= unionLevel && unionLevel < 8000) {
        return 'https://i.namu.wiki/i/Cmc7slvnzqME37PzXXBCPuYkoIPpg9ymtOQJtPL5Q16PKFt9BIC25n70TyZPc9kIdYH85Br6K76LMdJXV4RSyw.webp';
    } else if (8000 <= unionLevel && unionLevel < 8500) { // 그랜드 마스터
        return 'https://i.namu.wiki/i/-kuJi85K_mkmlEJjjYhS_990c9E4JDvTEwb5lGneSOQT33xe5KYB6DNd5U9XV5RkYeSeTc0Jq0s5AAZhVBIGQw.webp';
    } else if (8500 <= unionLevel && unionLevel < 9000) {
        return 'https://i.namu.wiki/i/-gfeA7HcHOdW2ZwGKJFA2_Gy5FoX2fbBcWThbjNUYN_vEWJ_pyQGlrYRfFj3Pp8PBDPW-kW08BB8C6QDebDK0w.webp';
    } else if (9000 <= unionLevel && unionLevel < 9500) {
        return 'https://i.namu.wiki/i/syo8AEst2S8cT_LGXKpqOT8U290w1fUht-2F3wLSHfeZ6TDTcTgvGQ7EBtR6nbbTiN__PVUW-9VFb5zqONBwvg.webp';
    } else if (9500 <= unionLevel && unionLevel < 10000) {
        return 'https://i.namu.wiki/i/bMn0ythOvyyg4Oil-XCs84_KmBHcVy7YVPy9SBoRCBG4Ju9MIJud92ZWkN8zB5pp9ABrKrVACB6rF2cY0qiNtg.webp';
    } else if (10000 <= unionLevel && unionLevel < 10500) {
        return 'https://i.namu.wiki/i/m930o5TwbGsJZkjRk7QxKT4VBwGGnq8uVJZp1c4Mhp7EdkX2cZzcoyUdTfki9Jk9MP1uV8BydvLgrSfC2zlrjg.webp';
    } else if (10500 <= unionLevel && unionLevel < 11000) { // 슈프림
        return 'https://i.namu.wiki/i/Si6HfMoi2Ro8ZddBLwAqKDDzZPNW66OTxgXh7Or9O674WMWfp9dmDZmZoWLvUgxMn2TmYEiIl7qwuUzZhcXLEwzr3DK9pzdPpFCDpofsPDUg7__3UToopoNQ9dJocNYMUcjz096GLFeqaqHWSp7vsA.webp';
    } else if (11000 <= unionLevel && unionLevel < 11500) {
        return 'https://i.namu.wiki/i/AaNqbHeSyFuJN3iid19wfVTe42V5oYnam-dFr7oTRrTB9wbeZv8tBnRC7kwYNhWg58LorHZ8ysh0hWdAp0Kd3j-O9Zcdsa9WELs8hAcWsEoHdmgzIxbi2_J1DtCa50M9EaTSm4ExyjWhvmgXoQiEPQ.webp';
    } else if (11500 <= unionLevel && unionLevel < 12000) {
        return 'https://i.namu.wiki/i/L1gl2M_qvk7AaHehKVIYbFu-hIyyKpciCNDP7p7qo5n3orJNbYgkeSNlRzd90LpzHlNKQKUQDRS7g3JnpCdzKIib8llexFY1CeaZ9O9CAg26vbuVyXWl-bKq6ye9rQ1LBpIsri26qeeTopFE_sIyVw.webp';                                    
    } else if (12000 <= unionLevel && unionLevel < 12500) {
        return 'https://i.namu.wiki/i/5qUk7j036BI-8fIPYWVWI8Rg-m2oWLmHfGyM0XodU5XPOO-Ky54jtzskKikchZJwoiI2-7C40EvQ87yfTJqT904AAz7Riw_a7yrf42zAyCS1ySb7HwszJebu4-bSAhEjbH0SXON_2mJywCadI6YJ8Q.webp';    
    } else if (12500 <= unionLevel) {
        return 'https://i.namu.wiki/i/w4FS6_fXXXMVygBAG_5TWZ1iy0LDfWq3vbjV8iWqWWEMmdHey-SgZxjCGmH_Zji2jgu2VVy2B2ZJoMCYAv87QL-WwD_9RglgqeXQXyltwpHvNN9EeJUfEN-zGLCW4xwyNJX6UWBuhuednN9T2SOnAQ.webp';    
    } else {
        return null;               
    }
}

export default getUnionIcon