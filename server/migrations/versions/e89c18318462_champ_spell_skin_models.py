"""champ, spell, skin models

Revision ID: e89c18318462
Revises: fc5558cf480a
Create Date: 2023-09-11 15:36:04.618544

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e89c18318462'
down_revision = 'fc5558cf480a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('champions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('loading_image', sa.String(), nullable=False),
    sa.Column('lore', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('skins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('champion_id', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['champion_id'], ['champions.id'], name=op.f('fk_skins_champion_id_champions')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spells',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('champion_id', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['champion_id'], ['champions.id'], name=op.f('fk_spells_champion_id_champions')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spells')
    op.drop_table('skins')
    op.drop_table('champions')
    # ### end Alembic commands ###
