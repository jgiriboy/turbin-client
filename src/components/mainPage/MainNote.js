import './MainNote.css';

const MainNote = () => {
    return (
        <div className='index-note'>
            <img
                src='/images/megaphone.svg'
                className='index-note-icon'
                alt=''
            />
            <div className='index-note-text-border'>
                <span className='index-note-text'>
                    TurBin에 쓰레기 버리고 리워드 받자 !
                </span>
            </div>
        </div>
    );
};

export default MainNote;
