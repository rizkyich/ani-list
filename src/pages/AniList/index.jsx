/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { MdAdd } from 'react-icons/md';

import AniPaper from '../../components/AniPaper';
import AniCard from '../../components/AniCard';
import AniModal from '../../components/AniModal';
import AniButton from '../../components/AniButton';
import AniCollectionModalList from '../../components/AniCollectionModalList';
import Pagination from '../../components/Pagination';

import { LIST_ANIME } from '../../GraphQL/queries';

const AniList = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(10);
  const [pageSize, setPageSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { error, loading, data } = useQuery(LIST_ANIME, {
    variables: {
      page
    }
  });

  useEffect(() => {
    if (data?.Page?.pageInfo) {
      setTotalCount(data.Page.pageInfo.total);
      setPageSize(data.Page.pageInfo.perPage);
    }
  }, [data]);

  const handleClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h2 css={{ color: theme.colors.bold, marginBottom: '10px' }}>Anime List</h2>

      {!loading && (
        <AniButton
          type="submit"
          text="Add Bulk to Collection"
          icon={MdAdd}
          onClick={() => setIsModalOpen(true)}
        />
      )}

      <AniPaper container>
        {loading && <p>Please wait...</p>}

        {!loading &&
          data.Page?.media?.map((anime, idx) => {
            return (
              <AniCard
                key={idx}
                id={anime.id}
                title={anime.title.romaji}
                banner={anime.bannerImage}
                cover={anime.coverImage.medium}
                score={anime.averageScore}
                seasonYear={anime.seasonYear}
                onClickItem={handleClickCard}
              />
            );
          })}
      </AniPaper>

      {isModalOpen && (
        <AniModal onClose={() => setIsModalOpen(false)}>
          <AniCollectionModalList
            data={data?.Page?.media}
            closeModal={() => setIsModalOpen(false)}
          />
        </AniModal>
      )}

      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default AniList;
