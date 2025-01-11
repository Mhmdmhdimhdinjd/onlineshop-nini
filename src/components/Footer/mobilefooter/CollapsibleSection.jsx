import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

const CollapsibleSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography fontFamily={'gandom'}>{title}</Typography>
        <Typography sx={{ fontSize: 'large' }}>{isOpen ? '▲' : '▼'}</Typography>
      </Box>
      {isOpen && (
        <List sx={{ listStyleType: 'none', mt: 2, pl: 0 }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ display: 'block', mb: 2 }}>
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' , fontFamily:'gandom'}}>
                {item}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CollapsibleSection;
