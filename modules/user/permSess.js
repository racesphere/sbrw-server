const permSess = (req, res) => {
    console.log('body', req.body);
    console.log('head', req.headers)
    res.send(`
    <UserInfo>
    <defaultPersonaIdx>0</defaultPersonaIdx>
    <personas>
        <ProfileData>
            <Boost>0.0</Boost>
            <Cash>9833.0</Cash>
            <IconIndex>17</IconIndex>
            <Level>5</Level>
            <Name>XSZD</Name>
            <PercentToLevel>0.0</PercentToLevel>
            <PersonaId>26968</PersonaId>
            <Rating>0.0</Rating>
            <Rep>0.0</Rep>
            <RepAtCurrentLevel>0</RepAtCurrentLevel>
            <Score>0</Score>
        </ProfileData>
    </personas>
    <user>
        <fullGameAccess>false</fullGameAccess>
        <isComplete>false</isComplete>
        <remoteUserId>0</remoteUserId>
        <securityToken>9b2612a1-fd91-41c9-95be-a255f4effd88</securityToken>
        <subscribeMsg>false</subscribeMsg>
        <userId>26083</userId>
    </user>
</UserInfo>
    `)
}

module.exports = permSess;